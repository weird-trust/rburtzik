<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let container;
	let img;
	let cursors = [];
	let p5;
	let p5Instance;
	let cursorFont;
	let cursorMode = 'image';
	let isPaused = false;
	let clickStep = 0;

	// Anzahl und Verhalten
	const CURSOR_COUNT = 220; // Anzahl der Cursor
	const BASE_DELAY_MS = 60; // Basisverzögerung
	const DELAY_STEP_MS = 10; // zusätzl. Verzögerung pro Cursor (i * step)
	const EASE = 0.12; // Lerp-Faktor pro Cursor (0..1), kleiner = glatter

	// Noise / Jitter
	const WANDER_NOISE_SPEED = 0.00025; // langsames Wandern
	const JITTER_PX = 10; // maximale Jitter-Amplitude in px
	const JITTER_SPEED = 0.0012; // Jitter-Takt
	const SHAPE_MODE_MS = 3500; // Wechselintervall der Eigenbewegung
	const SHAPE_AMPLITUDE = 140; // Größe der Formen
	const SHAPE_INFLUENCE = 0.65; // Gewichtung der Form im Ziel

	// Follow-Aktivierung
	const MOVE_SPEED_THRESHOLD = 0.08; // px/ms, ab hier gilt es als "bewegend"
	const MODE_ACTIVATION_MS = 350; // so lange zusammenhängend bewegen zum Aktivieren
	const MODE_IDLE_TIMEOUT_MS = 1200; // nach x ms ohne Bewegung -> zurück zu Noise
	const FOLLOW_BLEND_IN = 0.1; // Einblend-Geschwindigkeit (0..1)
	const FOLLOW_BLEND_OUT = 0.03; // Ausblend-Geschwindigkeit (0..1)

	const CURSOR_FONT_URL = '/fonts/Cursor-Apple.otf';
	const CURSOR_GLYPHS = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'R',
		'B',
		'K',
		'N',
		'X',
		'm',
		'+',
		'-',
		'?',
		'C',
		'c',
		't',
		'T',
		'r',
		'd',
		'x',
		's',
		'y',
		'a',
		'q',
		'w',
		'e',
		'h',
		'v',
		'E',
		'Q',
		'H',
		'V',
		'W',
		'S',
		'M',
		'A',
		'D'
	];
	const CURSOR_COLOR = '#163e00';

	let followActive = false; // aktueller Modus
	let followBlend = 0; // 0..1, mischt Noise -> Follow

	// Pointer-Buffer
	const BUFFER_SIZE = 1200; // ~1200 Samples reichen für 1–2s Trail bei 60fps
	let pointerBuffer;
	let writeIdx = 0;
	let pointsInBuffer = 0;

	// Bewegungs-Tracking
	let lastEventTime = 0;
	let lastEventX = 0;
	let lastEventY = 0;
	let movingStreakMs = 0;
	let lastMoveTime = 0;

	// Puls-/Impulse-Interaktion (Klick/Touch)
	const PULSE_MAX_RADIUS = 280; // Endradius des Rings
	const PULSE_GROW_MS = 420; // Zeit bis Max-Radius
	const PULSE_LIFE_MS = 700; // Gesamtdauer pro Puls
	const PULSE_STRENGTH = 0.85; // Stärke der Impulse
	const VELOCITY_DAMP = 0.86; // Dämpfung der Impuls-Velocity je Cursor

	let pulses = []; // {x,y,t0,type:'repel'|'attract'}

	let onPointerMoveHandler;
	let onPointerDownHandler;

	function pushPointer(x, y, t) {
		if (!pointerBuffer) return;
		pointerBuffer[writeIdx] = { x, y, t };
		writeIdx = (writeIdx + 1) % BUFFER_SIZE;
		pointsInBuffer = Math.min(pointsInBuffer + 1, BUFFER_SIZE);
	}

	function getPointerAt(targetTime) {
		// Keine Daten -> Mitte
		if (!pointsInBuffer || !pointerBuffer) {
			if (typeof window !== 'undefined') {
				return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			}
			return { x: 0, y: 0 };
		}

		// Suche rückwärts bis wir einen Punkt mit t <= targetTime finden
		let idx = (writeIdx - 1 + BUFFER_SIZE) % BUFFER_SIZE;
		let steps = 0;

		// Frühestes Sample (falls targetTime sehr alt ist)
		let earliestIdx = (writeIdx - pointsInBuffer + BUFFER_SIZE) % BUFFER_SIZE;
		const earliest = pointerBuffer[earliestIdx] ?? pointerBuffer[idx];

		if (earliest && earliest.t >= targetTime) {
			return { x: earliest.x, y: earliest.y };
		}

		while (steps < pointsInBuffer && pointerBuffer[idx].t > targetTime) {
			idx = (idx - 1 + BUFFER_SIZE) % BUFFER_SIZE;
			steps++;
		}

		const a = pointerBuffer[idx];
		const b = pointerBuffer[(idx + 1) % BUFFER_SIZE] ?? a;

		if (!a || !b) return { x: a?.x ?? 0, y: a?.y ?? 0 };

		const dt = b.t - a.t || 1;
		const u = Math.min(Math.max((targetTime - a.t) / dt, 0), 1);
		return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u };
	}

	function addPulse(x, y, type, now) {
		pulses.push({ x, y, t0: now, type });
		// Hard-limit, falls man spamt
		if (pulses.length > 16) pulses.splice(0, pulses.length - 16);
	}

	function pulseRadius(now, pulse) {
		const age = now - pulse.t0;
		const k = Math.min(1, Math.max(0, age / PULSE_GROW_MS));
		return PULSE_MAX_RADIUS * k;
	}

	function pulseStrength(now, pulse) {
		const age = now - pulse.t0;
		if (age >= PULSE_LIFE_MS) return 0;
		// ease-out Stärke
		const k = 1 - Math.min(1, age / PULSE_LIFE_MS);
		return k * PULSE_STRENGTH;
	}

	class Follower {
		constructor(p, image, i) {
			this.delayOffsetMs = BASE_DELAY_MS + i * DELAY_STEP_MS;
			this.ease = EASE * p.random(0.85, 1.15); // minimale Variation
			this.width = p.random(6, 28);
			this.height = this.width * (image.height / image.width);
			this.glyph = CURSOR_GLYPHS[i % CURSOR_GLYPHS.length];

			// Seeds für Noise/Jitter
			this.nxSeed = p.random(-1000, 1000);
			this.nySeed = p.random(-1000, 1000);
			this.jxSeed = p.random(0, 1000);
			this.jySeed = p.random(1000, 2000);

			// Zustand
			this.x = p.width / 2 + p.random(-10, 10);
			this.y = p.height / 2 + p.random(-10, 10);
			this.vx = 0;
			this.vy = 0;
		}

		update(p, delayedTarget, blend, impulseX, impulseY, shapeInfluence) {
			const t = p.millis();

			// Velocity durch Impulse
			this.vx += impulseX || 0;
			this.vy += impulseY || 0;

			// Erst Impulse integrieren, dann zum Ziel ziehen
			this.x += this.vx;
			this.y += this.vy;

			// Wander-Ziel (Perlin-Noise)
			const wanderX = p.width * p.noise(this.nxSeed, t * WANDER_NOISE_SPEED);
			const wanderY = p.height * p.noise(t * WANDER_NOISE_SPEED, this.nySeed);

		// Jitter für "nicht super strikt"
		const jitterX = (p.noise(this.jxSeed, t * JITTER_SPEED) - 0.5) * 2 * JITTER_PX;
		const jitterY = (p.noise(t * JITTER_SPEED, this.jySeed) - 0.5) * 2 * JITTER_PX;

		// Eigenleben-Formen: Kreis -> Linie -> Quadrat
		const shapeMode = Math.floor(t / SHAPE_MODE_MS) % 3;
		const phase = (t * 0.001 + this.nxSeed) % (Math.PI * 2);
		let shapeX = 0;
		let shapeY = 0;
		if (shapeMode === 0) {
			shapeX = Math.cos(phase) * SHAPE_AMPLITUDE;
			shapeY = Math.sin(phase) * SHAPE_AMPLITUDE;
		} else if (shapeMode === 1) {
			shapeX = Math.sin(phase) * SHAPE_AMPLITUDE;
			shapeY = 0;
		} else {
			const u = (phase / (Math.PI * 2)) * 4;
			const seg = Math.floor(u);
			const f = u - seg;
			const a = SHAPE_AMPLITUDE;
			if (seg === 0) {
				shapeX = -a + f * 2 * a;
				shapeY = -a;
			} else if (seg === 1) {
				shapeX = a;
				shapeY = -a + f * 2 * a;
			} else if (seg === 2) {
				shapeX = a - f * 2 * a;
				shapeY = a;
			} else {
				shapeX = -a;
				shapeY = a - f * 2 * a;
			}
		}

		// Mischung zwischen Noise und verzögertem Mausziel
		const targetX = p.lerp(
			p.lerp(wanderX, wanderX + shapeX, shapeInfluence),
			p.lerp(delayedTarget.x + jitterX, delayedTarget.x + jitterX + shapeX, shapeInfluence),
			blend
		);
		const targetY = p.lerp(
			p.lerp(wanderY, wanderY + shapeY, shapeInfluence),
			p.lerp(delayedTarget.y + jitterY, delayedTarget.y + jitterY + shapeY, shapeInfluence),
			blend
		);

			// sanftes Nachziehen
			this.x += (targetX - this.x) * this.ease;
			this.y += (targetY - this.y) * this.ease;

			// Dämpfung der Impuls-Velocity
			this.vx *= VELOCITY_DAMP;
			this.vy *= VELOCITY_DAMP;
		}

		draw(p, image, font, mode) {
			if (mode === 'font' && font) {
				p.fill(CURSOR_COLOR);
				p.textSize(this.width);
				p.text(this.glyph, this.x, this.y);
				return;
			}
			p.image(image, this.x, this.y, this.width, this.height);
		}
	}

	onMount(async () => {
		if (!browser) return;

		p5 = (await import('p5')).default;

		// Pointer-Puffer vorbereiten
		pointerBuffer = new Array(BUFFER_SIZE);
		const now = performance.now();
		const cx = window.innerWidth / 2;
		const cy = window.innerHeight / 2;
		pushPointer(cx, cy, now);
		lastEventX = cx;
		lastEventY = cy;
		lastEventTime = now;

		onPointerMoveHandler = (e) => {
			const t = performance.now();
			const x = e.clientX;
			const y = e.clientY;

			// Ringpuffer
			pushPointer(x, y, t);

			// Bewegung messen
			const dt = t - lastEventTime;
			if (dt > 0) {
				const dx = x - lastEventX;
				const dy = y - lastEventY;
				const dist = Math.hypot(dx, dy);
				const speed = dist / dt; // px/ms

				if (speed > MOVE_SPEED_THRESHOLD) {
					movingStreakMs = Math.min(movingStreakMs + dt, 60000);
					if (!followActive && movingStreakMs >= MODE_ACTIVATION_MS) {
						followActive = true;
					}
					lastMoveTime = t;
				} else {
					// langsam abklingen lassen
					movingStreakMs = Math.max(movingStreakMs - dt, 0);
				}
			}

			lastEventX = x;
			lastEventY = y;
			lastEventTime = t;
		};

		// Klick/Touch: Repel, mit Shift als Attract
		onPointerDownHandler = (e) => {
			const t = performance.now();
			const x = e.clientX;
			const y = e.clientY;
			const type = e.shiftKey ? 'attract' : 'repel';
			addPulse(x, y, type, t);
			clickStep = (clickStep + 1) % 4;

			if (clickStep === 1) {
				cursorMode = 'font';
				isPaused = false;
			} else if (clickStep === 2) {
				isPaused = true;
			} else if (clickStep === 3) {
				isPaused = false;
			} else {
				cursorMode = 'image';
				isPaused = false;
			}

			if (p5Instance) {
				if (isPaused) {
					p5Instance.noLoop();
					p5Instance.redraw();
				} else {
					p5Instance.loop();
				}
			}
		};

		window.addEventListener('pointermove', onPointerMoveHandler, { passive: true });
		window.addEventListener('pointerdown', onPointerDownHandler, { passive: true });

		const sketch = (p) => {
			p.preload = () => {
				// cursor.png klein halten (32–64px) für Performance
				img = p.loadImage('/cursor.png');
				cursorFont = p.loadFont(CURSOR_FONT_URL);
			};

			p.setup = () => {
				p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
				p.createCanvas(window.innerWidth, window.innerHeight);
				p.noStroke();
				p.imageMode(p.CENTER);
				p.textAlign(p.CENTER, p.CENTER);
				p.textFont(cursorFont);
				cursors = Array.from({ length: CURSOR_COUNT }, (_, i) => new Follower(p, img, i));
			};

			p.draw = () => {
				p.clear();

				const now = performance.now();

				// Deaktivierung bei Inaktivität
				if (now - lastMoveTime > MODE_IDLE_TIMEOUT_MS) {
					followActive = false;
				}

				// weiches Ein-/Ausblenden des Follow-Anteils
				const targetBlend = followActive ? 1 : 0;
				const k = followActive ? FOLLOW_BLEND_IN : FOLLOW_BLEND_OUT;
				followBlend += (targetBlend - followBlend) * k;

				// Puls-Lebensdauer updaten + vorberechnen
				pulses = pulses.filter((pulse) => now - pulse.t0 < PULSE_LIFE_MS);
				const livePulses = pulses.map((pulse) => ({
					pulse,
					r: pulseRadius(now, pulse),
					s: pulseStrength(now, pulse)
				}));

				if (cursorMode === 'font' && cursorFont) {
					p.textFont(cursorFont);
					p.fill(CURSOR_COLOR);
				}

				const shapeInfluence = followActive ? 0 : SHAPE_INFLUENCE;

				for (let i = 0; i < cursors.length; i++) {
					const c = cursors[i];
					const delayed = getPointerAt(now - c.delayOffsetMs);

					// Impulse aus Pulsfeldern akkumulieren
					let ix = 0,
						iy = 0;
					for (let j = 0; j < livePulses.length; j++) {
						const { pulse, r, s } = livePulses[j];
						if (s <= 0) continue;
						const dx = c.x - pulse.x;
						const dy = c.y - pulse.y;
						const dist = Math.hypot(dx, dy);
						if (dist < r && dist > 0.0001) {
							const inv = 1 - dist / r; // 0..1
							const dirx = dx / dist;
							const diry = dy / dist;
							const sign = pulse.type === 'repel' ? 1 : -1;
							const f = s * inv;
							ix += sign * dirx * f;
							iy += sign * diry * f;
						}
					}

					c.update(p, delayed, followBlend, ix, iy, shapeInfluence);
					c.draw(p, img, cursorFont, cursorMode);
				}
			};

			p.windowResized = () => {
				p.resizeCanvas(window.innerWidth, window.innerHeight);
			};
		};

		p5Instance = new p5(sketch, container);
	});

	onDestroy(() => {
		if (!browser) return;
		if (onPointerMoveHandler) window.removeEventListener('pointermove', onPointerMoveHandler);
		if (onPointerDownHandler) window.removeEventListener('pointerdown', onPointerDownHandler);
		if (p5Instance) p5Instance.remove();
	});
</script>

<div
	bind:this={container}
	style="position: absolute; top: 0; left: 0; pointer-events: none; z-index: 9999;"
></div>

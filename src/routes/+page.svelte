<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import ProjectArrows from '$lib/components/ProjectArrows.svelte';
	import MouseAnimation from '$lib/components/MouseAnimation.svelte';
	import { onMount, tick } from 'svelte';
	import { hoverLabel } from '$lib/stores/hover';

	let onlineTimes = 'Mo - So: 14:00 - 00:00';
	let status: string = 'offline';
	let showHomeName = true;
	let showSessionTime = false;
	const sessionStart = Date.now();
	let sessionTime = '00:00';
	let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

	let timeObj = { hours: '00', minutes: '00', seconds: '00' };

	function updateTime(): void {
		const now = new Date();
		timeObj = {
			hours: now.getHours().toString().padStart(2, '0'),
			minutes: now.getMinutes().toString().padStart(2, '0'),
			seconds: now.getSeconds().toString().padStart(2, '0')
		};

		status = now.getHours() >= 14 || now.getHours() < 2 ? 'online' : 'offline';
		sessionTime = getSessionTime();
	}

	function getSessionTime(): string {
		const elapsedMs = Date.now() - sessionStart;
		const totalSeconds = Math.floor(elapsedMs / 1000);
		const minutes = Math.floor(totalSeconds / 60)
			.toString()
			.padStart(2, '0');
		const seconds = (totalSeconds % 60).toString().padStart(2, '0');
		return `${minutes}:${seconds}`;
	}

	onMount((): (() => void) => {
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});

	onMount((): (() => void) | void => {
		const observer = new IntersectionObserver(
			([entry]) => {
				showHomeName = !entry.isIntersecting;
			},
			{ threshold: 0.01, rootMargin: '0px 0px -10% 0px' }
		);

		let attempts = 0;
		const maxAttempts = 20;
		const tryObserve = async () => {
			await tick();
			const projectsElement = document.getElementById('projects');
			if (projectsElement) {
				observer.observe(projectsElement);
				return;
			}
			if (attempts < maxAttempts) {
				attempts += 1;
				requestAnimationFrame(tryObserve);
			}
		};

		tryObserve();
		return () => observer.disconnect();
	});

	let mouseX = 0;
	let mouseY = 0;
	let hoveredLink: HTMLElement | null = null;

	function handleMouseMove(event: MouseEvent) {
		if (!hoveredLink) return;

		const rect = hoveredLink.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		mouseX = (event.clientX - centerX) / (rect.width / 2);
		mouseY = (event.clientY - centerY) / (rect.height / 2);
	}

	function handleMouseEnter(event: MouseEvent) {
		hoveredLink = event.currentTarget as HTMLElement;
	}

	function handleMouseLeave() {
		mouseX = 0;
		mouseY = 0;
		hoveredLink = null;
	}

	function handleClick(event: MouseEvent, href: string) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const element = document.querySelector(href);
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleLinkHover(label: string | null) {
		const nextLabel = label;
		if (hoverTimeout) clearTimeout(hoverTimeout);
		if (nextLabel) {
			hoverLabel.set(nextLabel);
			return;
		}
		hoverTimeout = setTimeout(() => hoverLabel.set(null), 120);
	}

	function clearHoverLabelImmediate() {
		if (hoverTimeout) clearTimeout(hoverTimeout);
		hoverLabel.set(null);
	}
</script>

<main
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	on:mouseenter={handleMouseEnter}
>
	<a href="/about" class="nav-link about">Imprint</a>
	<a href="/" class="nav-link home" class:nav-hidden={!showHomeName || $hoverLabel}>
		Robert Burtzik
	</a>
	<a
		href="https://cv.robertburtzik.com/"
		class="nav-link title"
		class:nav-hidden={!showHomeName || $hoverLabel}
		target="_blank"
		rel="noopener noreferrer"
	>
		Interface-Designer and Creative Developer
	</a>
	<div
		class="clock nav-link"
		role="button"
		tabindex="0"
		on:click={() => (showSessionTime = !showSessionTime)}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') showSessionTime = !showSessionTime;
		}}
	>
		{#if showSessionTime}
			{sessionTime}
		{:else}
			{timeObj.hours}<span class="blink">:</span>{timeObj.minutes}<span class="blink">:</span
			>{timeObj.seconds}
		{/if}
	</div>
	<div class="p5-wrapper"></div>
	<MouseAnimation />
	<div>
		<p class="intro">
			Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
			intersection of design, technology, and culture. He is currently <span class="tooltip">
				<span class="status" data-status={status}>● {status}</span>
				<span class="tooltiptext">{onlineTimes}</span>
			</span>. <br /><br /> He has recently worked on

			<a
				href="#haus-der-kunst"
				on:pointerenter={() => handleLinkHover('Haus der Kunst München')}
				on:pointerleave={() => handleLinkHover(null)}
				on:click={(e) => handleClick(e, '#haus-der-kunst')}>Haus der Kunst München</a
			>,
			<a
				href="#shoah-memorial"
				on:pointerenter={() => handleLinkHover('Shoah Memorial Frankfurt')}
				on:pointerleave={() => handleLinkHover(null)}
				on:click={(e) => handleClick(e, '#shoah-memorial-frankfurt')}>Shoah Memorial Frankfurt</a
			>,
			<a
				href="#kampnagel"
				on:pointerenter={() => handleLinkHover('Kampnagel')}
				on:pointerleave={() => handleLinkHover(null)}
				on:click={(e) => handleClick(e, '#kampnagel')}>Kampnagel</a
			>,
			<a
				href="#internet-changed-my-life"
				on:pointerenter={() => handleLinkHover('Internet Changed My Life')}
				on:pointerleave={() => handleLinkHover(null)}
				on:click={(e) => handleClick(e, '#internet-changed-my-life')}>internet changed my life</a
			>.
		</p>
	</div>

	<button
		class="scroll-hint"
		on:click={() => {
			const projectsElement = document.getElementById('projects');
			if (projectsElement) {
				projectsElement.scrollIntoView({ behavior: 'smooth' });
			}
		}}
		on:pointerenter={clearHoverLabelImmediate}
	>
		Projects
	</button>
</main>
<ProjectArrows />
<Footer />

<style>
	main {
		padding: 1rem;
		margin: 0 auto;
		max-width: 800px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	:global(.p5-wrapper) {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	a:hover {
		cursor: pointer;
		text-decoration: underline;
		color: blue;
	}

	.intro {
		font-family: var(--font-display);
		font-size: 1.5rem;
		line-height: 1.1;
		letter-spacing: var(--tracking-slight);
		margin-bottom: 2rem;
		text-align: center;
	}

	.tooltip {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: #163e00;
		color: #fff;
		text-align: center;
		font-size: 10px;
		font-family: var(--font-mono);
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 100%;
		left: 50%;
		margin-left: -55px;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}

	.scroll-hint {
		text-align: center;
		font-family: var(--font-mono);
		font-weight: var(--font-weight-regular);
		font-size: 10px;
		margin-bottom: 2rem;
		position: relative;
		z-index: 5;
		color: var(--color-ink);
	}

	button {
		background: none;
		border: none;
		font-family: var(--font-mono);
		font-weight: var(--font-weight-regular);
		font-size: 10px;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 0.2em;
		color: blue;
	}

	@media (hover: none) {
		.scroll-hint,
		.scroll-hint:active,
		.scroll-hint:focus {
			color: var(--color-ink);
			text-decoration: none;
		}

		button:hover {
			color: var(--color-ink);
			text-decoration: none;
		}
	}

	.status {
		color: var(--status-color);
	}

	:global([data-status='online']) {
		--status-color: #3d6600;
	}

	:global([data-status='offline']) {
		--status-color: #ff0000;
	}

	.blink {
		display: inline-block;
		animation: blink 2s infinite;
		animation-timing-function: steps(1, start);
		font-weight: var(--font-weight-bold);
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.nav-link:hover {
		color: blue;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.nav-link {
		font-size: 10px;
		text-decoration: none;
		color: var(--color-ink);
		position: fixed;
	}

	.clock {
		right: 0.5rem;
		transform: translateX(-50%);
		top: 0.8rem;
		text-decoration: none;
		font-size: 10px;
		color: var(--color-ink);
	}

	.home {
		left: 2rem;
		top: 0.8rem;
		transition: opacity 0.3s ease;
	}

	.title {
		left: 50%;
		top: 0.8rem;
		transform: translateX(-50%);
		text-align: center;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.intro {
			font-size: 1.1rem;
			margin-bottom: 3rem;
		}

		.title {
			display: none;
		}
	}

	.nav-hidden {
		opacity: 0;
		pointer-events: none;
	}

	.about {
		right: 2rem;
		bottom: 0.8rem;
		z-index: 10000;
	}
</style>

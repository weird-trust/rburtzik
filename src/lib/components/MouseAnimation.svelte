<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let container;
	let img;
	let mouses = [];
	let p5;

	class Mouse {
		constructor(p, image) {
			this.x = p.random(p.width);
			this.y = p.random(p.height);
			this.randomX = p.random(-1000, 1000);
			this.randomY = p.random(-1000, 1000);
			this.speed = p.random(0.0001, 0.0002);
			this.width = p.random(5, 29);
			this.height = this.width * (image.height / image.width);
		}

		update(p) {
			const time = p.millis();
			this.x = p.width * (p.noise(this.randomX, 0, time * this.speed) * 1 + 0.05);
			this.y = p.height * (p.noise(0, this.randomY, time * this.speed) * 1 + 0.05);
		}

		draw(p, image) {
			p.image(image, this.x, this.y, this.width, this.height);
		}
	}

	onMount(async () => {
		if (browser) {
			p5 = (await import('p5')).default;

			const sketch = (p) => {
				p.preload = () => {
					img = p.loadImage('/cursor.png');
				};

				p.setup = () => {
					p.createCanvas(window.innerWidth, window.innerHeight);
					p.noStroke();
					mouses = Array.from({ length: 250 }, () => new Mouse(p, img));
				};

				p.draw = () => {
					p.clear();
					mouses.forEach((mouse) => {
						mouse.update(p);
						mouse.draw(p, img);
					});
				};

				p.windowResized = () => {
					p.resizeCanvas(window.innerWidth, window.innerHeight);
				};
			};

			new p5(sketch, container);
		}
	});
</script>

<div
	bind:this={container}
	style="position: absolute; top: 0; left: 0; pointer-events: none; z-index: 9999;"
></div>

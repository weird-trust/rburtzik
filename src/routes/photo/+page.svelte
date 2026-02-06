<script lang="ts">
	import { onMount } from 'svelte';

	let images: string[] = ['public/android-chrome-192x192.png', '2.jpg', '3.jpg'];

	let currentIndex: number = 0;
	let interval: number;

	onMount((): void => {
		interval = setInterval(() => {
			shiftImages();
		}, 200);
	});

	function shiftImages(): void {
		currentIndex = (currentIndex + 1) % images.length;
		const container = document.querySelector('.image-container') as HTMLElement;
		container.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	function stopInterval(): void {
		clearInterval(interval);
	}
</script>

<main>
	<h1>Photo Space</h1>
	<div
		class="image-wrapper"
		on:mouseenter={stopInterval}
		on:mouseleave={() => (interval = setInterval(shiftImages, 2000))}
		role="region"
		aria-label="Image carousel"
	>
		<div class="image-container">
			{#each images as image}
				<img src={image} />
			{/each}
		</div>
	</div>
	<nav>
		<a href="/">Home</a>
	</nav>
</main>

<style>
	body {
		background: #fff;
		color: var(--color-ink);
		font-family: var(--font-ui);
		margin: 0;
		padding: 0;
		line-height: 1.6;
		font-size: 16px;
	}

	h1 {
		font-weight: bold;
		text-transform: uppercase;
		margin: 0 0 20px 0;
	}

	nav a {
		display: inline-block;
		margin-right: 20px;
		padding: 10px 20px;
		background: var(--color-ink);
		color: #fff;
		text-transform: uppercase;
	}

	nav a:hover {
		background: #fff;
		color: var(--color-ink);
		border: 1px solid var(--color-ink);
	}

	main {
		padding: 40px;
		max-width: 800px;
		margin: 0 auto;
	}

	.image-wrapper {
		overflow: hidden;
		width: 100%;
		height: 300px; /* Höhe des Bildcontainers */
		position: relative;
	}

	.image-container {
		display: flex;
		transition: transform 1s ease;
		width: 100%;
	}

	.image-container img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>

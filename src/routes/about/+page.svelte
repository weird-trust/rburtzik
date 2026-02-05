<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import MouseAnimation from '$lib/components/MouseAnimation.svelte';
	import { onMount } from 'svelte';
	const ROWS = 4;
	const COLS = 4;
	const rows = Array(ROWS).fill(null);
	const cols = Array(COLS).fill('/');

	onMount((): void => {});
</script>

<main>
	<section class="arrows-background">
		<div class="arrow-container">
			{#each rows as _, rowIndex}
				<div class="row">
					{#each cols as arrow, colIndex}
						<span class="arrow" class:last-column={colIndex === COLS - 1}>
							{arrow}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</section>
</main>
<div class="footer-container">
	<Footer showImprintDetails />
</div>
<MouseAnimation />

<style>
	.footer-container {
		margin-top: 3rem;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 800px;
		z-index: 2;
	}
	main {
		padding: 40px;
		max-width: 800px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		main {
			padding: 25px;
		}
	}

	.arrows-background {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
		color: #163e00;
	}

	.arrow-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: none;
	}

	.row {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.arrow {
		font-size: 10px;
		line-height: 1;
	}

	.last-column {
		text-align: right;
	}
</style>

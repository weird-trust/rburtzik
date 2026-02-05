<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import MouseAnimation from '$lib/components/MouseAnimation.svelte';
	import { onMount } from 'svelte';
	const ROWS = 4;
	const COLS = 4;
	const rows = Array(ROWS).fill(null);
	const cols = Array(COLS).fill('/');
	let hoveredContent: string | null = null;

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
							{#if hoveredContent && colIndex !== COLS - 1}
								<div class="hover-content">
									<span class="hover-desc">{hoveredContent}</span>
								</div>
							{/if}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</section>
</main>
<div class="footer-container">
	<Footer
		showImprintDetails
		on:linkhover={(event) => (hoveredContent = event.detail.content)}
	/>
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
		position: relative;
	}

	.last-column {
		text-align: right;
	}

	.hover-content {
		position: absolute;
		font-size: 10px;
		left: 2rem;
		top: 50%;
		width: 20vw;
		transform: translateY(-50%);
		pointer-events: none;
		z-index: 3;
		background: transparent;
	}

	.hover-desc {
		display: block;
	}
</style>

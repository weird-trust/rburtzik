<script lang="ts">
	import { onMount } from 'svelte';

	let grid: string[][] = [];
	let rotations: number[][] = [];
	let rows: number;
	let cols: number;
	let animationFrame: number;
	let time: number = 0;
	let isClicked: boolean = false;
	let gridContainer: HTMLElement;

	function calculateGridSize() {
		if (!gridContainer) return;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const cellSize = 50; // Etwa 0.8rem + etwas Abstand

		cols = Math.ceil(viewportWidth / cellSize);
		rows = Math.ceil(viewportHeight / cellSize);

		initializeGrid();
	}

	function initializeGrid(): void {
		grid = [];
		rotations = [];
		for (let i = 0; i < rows; i++) {
			grid[i] = [];
			rotations[i] = [];
			for (let j = 0; j < cols; j++) {
				grid[i][j] = Math.random() < 1 ? '/' : '';
				rotations[i][j] = 0;
			}
		}
	}

	function animate(): void {
		time += 0.05;

		// Optimierung: Nur sichtbare Elemente animieren
		const rect = gridContainer?.getBoundingClientRect();
		if (!rect) return;

		const startRow = Math.max(0, Math.floor(-rect.top / 20));
		const endRow = Math.min(rows, Math.ceil((window.innerHeight - rect.top) / 20));
		const startCol = Math.max(0, Math.floor(-rect.left / 20));
		const endCol = Math.min(cols, Math.ceil((window.innerWidth - rect.left) / 20));

		for (let i = startRow; i < endRow; i++) {
			for (let j = startCol; j < endCol; j++) {
				rotations[i][j] = Math.sin(time + (i + j) / 2) * 45;
			}
		}

		animationFrame = requestAnimationFrame(animate);
	}

	function handleMouseMove(event: MouseEvent): void {
		const rect = gridContainer?.getBoundingClientRect();
		if (!rect) return;

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const col = Math.floor((x / rect.width) * cols);
		const row = Math.floor((y / rect.height) * rows);

		// Optimierung: Nur Elemente in der Nähe der Maus beeinflussen
		const radius = 10;
		const startRow = Math.max(0, row - radius);
		const endRow = Math.min(rows, row + radius);
		const startCol = Math.max(0, col - radius);
		const endCol = Math.min(cols, col + radius);

		for (let i = startRow; i < endRow; i++) {
			for (let j = startCol; j < endCol; j++) {
				const dx = j - col;
				const dy = i - row;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance > radius) continue;

				const angle = Math.atan2(dy, dx) * (180 / Math.PI);
				const influence = Math.max(0, 1 - distance / 5);
				rotations[i][j] = rotations[i][j] * (1 - influence) + angle * influence;
			}
		}
	}

	function handleClick(): void {
		isClicked = !isClicked;
		if (isClicked) {
			const rect = gridContainer?.getBoundingClientRect();
			if (!rect) return;

			// Optimierung: Nur sichtbare Elemente rotieren
			const startRow = Math.max(0, Math.floor(-rect.top / 20));
			const endRow = Math.min(rows, Math.ceil((window.innerHeight - rect.top) / 20));
			const startCol = Math.max(0, Math.floor(-rect.left / 20));
			const endCol = Math.min(cols, Math.ceil((window.innerWidth - rect.left) / 20));

			for (let i = startRow; i < endRow; i++) {
				for (let j = startCol; j < endCol; j++) {
					rotations[i][j] += 360;
				}
			}
		}
	}

	onMount((): void => {
		calculateGridSize();
		animationFrame = requestAnimationFrame(animate);

		const resizeObserver = new ResizeObserver(calculateGridSize);
		resizeObserver.observe(gridContainer);

		return () => {
			cancelAnimationFrame(animationFrame);
			resizeObserver.disconnect();
		};
	});

	function stopAnimation(): void {
		cancelAnimationFrame(animationFrame);
	}
</script>

<div class="ascii-wrapper">
	<div
		class="ascii-grid"
		role="button"
		tabindex="0"
		bind:this={gridContainer}
		on:mousemove={handleMouseMove}
		on:mouseenter={stopAnimation}
		on:mouseleave={() => (animationFrame = requestAnimationFrame(animate))}
		on:click={handleClick}
		on:keydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				handleClick();
			}
		}}
	>
		{#each grid as row, rowIndex}
			<div class="ascii-row">
				{#each row as cell, colIndex}
					<span style="transform: rotate({rotations[rowIndex][colIndex]}deg)">{cell}</span>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.ascii-wrapper {
		position: relative;
		aspect-ratio: 16/9;
		width: auto;
		height: auto;
		overflow: hidden;
		border: 5px black double;
	}

	@media (max-width: 768px) {
		.ascii-wrapper {
			aspect-ratio: 9/16;
		}
	}

	.ascii-grid {
		user-select: none;
		width: 100%;
		height: 100%;
		color: #333333;
		font-family: var(--font-mono);
		line-height: 1;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.ascii-row {
		display: flex;
		justify-content: center;
		will-change: transform;
	}

	.ascii-row span {
		display: inline-block;
		width: 20px;
		height: 20px;
		text-align: center;
		transition: transform 0.5s ease;
		font-size: 0.7rem;
		transform-origin: center center;
		will-change: transform;
		contain: layout style paint;
	}
</style>

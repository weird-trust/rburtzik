<script lang="ts">
	import { onMount } from 'svelte';

	let grid: string[][] = [];
	const rows: number = 20;
	const cols: number = 20;
	let rotations: number[][] = [];
	let animationFrame: number;
	let time: number = 0;
	let isClicked: boolean = false;

	function initializeGrid(): void {
		for (let i = 0; i < rows; i++) {
			grid[i] = [];
			rotations[i] = [];
			for (let j = 0; j < cols; j++) {
				grid[i][j] = Math.random() < 0.9 ? '/' : '';
				rotations[i][j] = 0;
			}
		}
	}

	function animate(): void {
		time += 0.05;
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				rotations[i][j] = Math.sin(time + (i + j) / 2) * 45;
			}
		}
		animationFrame = requestAnimationFrame(animate);
	}

	function handleMouseMove(event: MouseEvent): void {
		const rect = event.currentTarget
			? (event.currentTarget as HTMLElement).getBoundingClientRect()
			: { left: 0, top: 0, width: 0, height: 0 };
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const col = Math.floor((x / rect.width) * cols);
		const row = Math.floor((y / rect.height) * rows);

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				const dx = j - col;
				const dy = i - row;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const angle = Math.atan2(dy, dx) * (180 / Math.PI);
				const influence = Math.max(0, 1 - distance / 5);
				rotations[i][j] = rotations[i][j] * (1 - influence) + angle * influence;
			}
		}
	}

	function handleClick(): void {
		isClicked = !isClicked;
		if (isClicked) {
			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					rotations[i][j] += 360;
				}
			}
		}
	}

	onMount((): void => {
		initializeGrid();
		animationFrame = requestAnimationFrame(animate);
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
	.ascii-grid {
		user-select: none;
		display: inline-block;
		width: 100%;
		max-width: 100%;
		color: #333;
		font-family: var(--font-mono);
		line-height: 1;

		cursor: pointer;
		transition: background 0.3s;
	}

	.ascii-row {
		display: flex;
		justify-content: center;
		will-change: transform;
	}

	.ascii-row span {
		/* border: 0.1px solid black; */
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		text-align: center;
		transition: transform 0.3s ease;
		font-size: 10px;
		transform-origin: center center;
		will-change: transform;
	}
</style>

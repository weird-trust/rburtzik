<script lang="ts">
	import { onMount } from 'svelte';

	let grid: string[][] = [];
	const rows: number = 20;
	const cols: number = 20;
	let rotations: number[][] = [];
	let animationFrame: number;
	let time: number = 0;
	let isClicked: boolean = false;
	let permissionGranted: boolean = false;

	function initializeGrid(): void {
		for (let i = 0; i < rows; i++) {
			grid[i] = [];
			rotations[i] = [];
			for (let j = 0; j < cols; j++) {
				grid[i][j] = Math.random() < 0.5 ? '/' : '';
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

	function handleDeviceOrientation(event: DeviceOrientationEvent): void {
		const { beta, gamma } = event;
		const col = Math.floor((((gamma ?? 0) + 90) / 180) * cols);
		const row = Math.floor((((beta ?? 0) + 90) / 180) * rows);

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				const dx = j - col;
				const dy = i - row;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const angle = Math.atan2(dy, dx) * (180 / Math.PI);
				const influence = Math.max(0, 1 - distance / 2);
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

	async function requestPermission() {
		if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
			try {
				const permissionState = await (DeviceOrientationEvent as any).requestPermission();
				if (permissionState === 'granted') {
					permissionGranted = true;
					window.addEventListener('deviceorientation', handleDeviceOrientation);
				}
			} catch (error) {
				console.error(error);
			}
		} else {
			permissionGranted = true;
			window.addEventListener('deviceorientation', handleDeviceOrientation);
		}
	}

	onMount((): void => {
		initializeGrid();
		animationFrame = requestAnimationFrame(animate);
		requestPermission();
	});

	function stopAnimation(): void {
		cancelAnimationFrame(animationFrame);
	}
</script>

<div class="ascii-wrapper">
	{#if !permissionGranted}
		<div class="modal">
			<div class="modal-content">
				<p>
					This site uses your device's gyroscope to interact with the wandering flow of ASCII
					characters. A simple touch on the canvas will enable the gyroscope, but first you have to
					allow it.
				</p>
				<button on:click={requestPermission} class="permission-button"> Enable Gyroscope </button>
			</div>
		</div>
	{/if}
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
	p {
		margin: 0 0 20px 0;
	}

	.ascii-wrapper {
		perspective: 1000px;
		transform-style: preserve-3d;
	}

	.ascii-grid {
		user-select: none;
		display: inline-block;
		width: 100%;
		max-width: 100%;
		color: #333;
		font-family: var(--font-mono);
		line-height: 3;
		cursor: pointer;
		transition: background 0.3s;
		backface-visibility: hidden;
		transform: translateZ(0);
	}

	.ascii-row {
		display: flex;
		justify-content: center;
		will-change: transform;
	}

	.ascii-row span {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		text-align: center;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		font-size: 10px;
		transform-origin: center center;
		will-change: transform;
		backface-visibility: hidden;
	}

	.permission-button {
		margin-top: 20px;
		padding: 10px 20px;
		background-color: #000;
		color: #fff;
		border: none;
		cursor: pointer;
		font-family: var(--font-mono);
	}

	.permission-button:hover {
		background-color: #333;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		text-align: center;
		max-width: 90%;
		font-family: var(--font-mono);
	}

	@media (min-width: 768px) {
		.permission-button {
			display: none;
		}
	}
</style>

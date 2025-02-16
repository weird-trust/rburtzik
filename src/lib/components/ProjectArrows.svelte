<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { CldImage, CldVideoPlayer } from 'svelte-cloudinary';
	import { browser } from '$app/environment';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
	import { isTransitioning } from '$lib/stores/transition';
	import { goto } from '$app/navigation';
	import { getImageTransform } from '$lib/utils/cloudinaryTransforms';
	let loaded = false;

	$: if (browser) {
		loaded = true;
	}

	const ROWS = 4;
	const COLS = 4;
	const rows = Array(ROWS).fill(null);
	const cols = Array(COLS).fill('/');

	let mouseX = 0;
	let mouseY = 0;
	let hoveredMedia: HTMLElement | null = null;

	function handleMouseMove(event: MouseEvent) {
		if (!hoveredMedia) return;

		const rect = hoveredMedia.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		mouseX = (event.clientX - centerX) / (rect.width / 2);
		mouseY = (event.clientY - centerY) / (rect.height / 2);
	}

	function handleMouseEnter(event: MouseEvent) {
		hoveredMedia = event.currentTarget as HTMLElement;
	}

	function handleMouseLeave() {
		mouseX = 0;
		mouseY = 0;
		hoveredMedia = null;
	}

	async function handleProjectClick(projectId: string, e: MouseEvent) {
		e.preventDefault();

		// Start transition
		isTransitioning.set(true);

		// Animate project title
		await animate(
			'.project-title h2',
			{
				opacity: [1, 0],
				y: [0, -100]
			},
			{ duration: 0.5 }
		);

		goto(`/projects/${projectId}`);
	}
</script>

<div id="projects" class="projects" role="presentation" on:mousemove={handleMouseMove}>
	{#each projects as project, projectIndex}
		<section class="project-section" data-project-id={project.id} id={project.id}>
			<div class="arrow-container">
				{#each rows as _, rowIndex}
					<div class="row">
						{#each cols as arrow, colIndex}
							<span class="arrow" class:last-column={colIndex === COLS - 1}>
								{arrow}
								{#if colIndex !== COLS - 1}
									<div class="hover-content">
										<span class="project-name">{project.work}</span>
										<span class="project-type">for {project.credits.agency}</span>
										<span class="project-desc"> in {project.year}</span>
									</div>
								{/if}
							</span>
						{/each}
					</div>
				{/each}
			</div>
			<a
				href={`/projects/${project.id}`}
				class="project-title"
				on:click={(e) => handleProjectClick(project.id, e)}
			>
				<h2>{project.name}</h2>
				{#if project.media?.[0]}
					<div
						class="hover-media"
						role="img"
						on:mouseenter={handleMouseEnter}
						on:mouseleave={handleMouseLeave}
						style="transform: translate(-50%, -50%) 
                    perspective(1000px) 
                    rotateY({mouseX * 10}deg) 
                    rotateX({-mouseY * 10}deg)"
					>
						{#if project.media[0].type === 'image'}
							<CldImage
								src={project.media[0].publicId}
								alt={project.media[0].alt || project.name}
								{...getImageTransform(project.media[0].publicId)}
								format="auto"
								quality="auto"
								fetchFormat="auto"
								loading="lazy"
								on:load={() => console.log('Image loaded')}
								on:error={(e) => console.error('Image error:', e)}
							/>
						{:else if project.media[0].type === 'video'}
							<CldVideoPlayer
								src={project.media[0].publicId}
								width={960}
								height={600}
								muted
								loop
								playsinline
								controls={false}
								on:load={() => console.log('Video loaded')}
								on:error={(e) => console.error('Video error:', e)}
							/>
						{/if}
					</div>
				{/if}
			</a>
		</section>
	{/each}
</div>

<style>
	:global(body) {
		transition: background-color 0.4s ease-in-out;
	}
	div.projects {
		height: 100vh;
		width: 100vw;
		/* overflow-y: auto;
		overflow-x: hidden; */
	}

	.project-section {
		height: 100vh;
		width: 100%;
		position: relative;
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
		position: relative;
		line-height: 1;
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.last-column {
		text-align: right;
	}

	.hover-media {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 1;
		opacity: 0;
		pointer-events: none;
		transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
		mix-blend-mode: difference;
		transform-style: preserve-3d;
		will-change: transform;
	}

	.hover-media img,
	.hover-media video {
		width: 100%;
		height: 100%;
		object-fit: contain;
		backface-visibility: hidden;
	}

	.project-title:hover .hover-media {
		opacity: 1;
		pointer-events: auto;
	}

	.project-title {
		transition:
			transform 0.6s ease-out,
			opacity 0.6s ease-out;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		text-decoration: none;
		color: inherit;
	}

	.project-title:hover ~ .arrow-container .arrow {
		opacity: 0.2;
	}

	h2 {
		font-family: Helvetica, Arial, sans-serif;
		font-size: clamp(60px, 10vw, 110px);
		font-weight: 400;
		letter-spacing: -0.07em;
		line-height: 0.8;
		width: 90vw;
		text-align: center;
	}

	.hover-content {
		position: absolute;
		font-size: 10px;
		left: 2rem;
		top: 50%;
		width: 20vw;
		transform: translateY(-50%);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: 3;
		background: transparent;
	}

	.project-section:has(.project-title:hover) .arrow:not(.last-column) .hover-content {
		opacity: 1;
	}
</style>

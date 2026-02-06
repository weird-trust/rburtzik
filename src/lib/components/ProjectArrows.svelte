<script lang="ts">
	import { projects } from '$lib/data/projects';

	import { animate } from 'motion';
	import { onMount } from 'svelte';
	import { isTransitioning } from '$lib/stores/transition';
	import { hoverLabel } from '$lib/stores/hover';
	import { goto } from '$app/navigation';

	const ROWS = 4;
	const COLS = 4;
	const rows = Array(ROWS).fill(null);
	const cols = Array(COLS).fill('/');

	let mouseX = 0;
	let mouseY = 0;
	let hoveredMedia: HTMLElement | null = null;
	let projectIntersections: Record<string, boolean> = {};
	let isMobile = false;
	let isSafari = false;
	let rafId = 0;
	let lastMouseEvent: MouseEvent | null = null;

	onMount(() => {
		isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		// Check if device is mobile (no hover capability)
		isMobile = window.matchMedia('(hover: none)').matches;

		// Set up intersection observers for mobile view
		if (isMobile) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						const projectId = entry.target.getAttribute('data-project-id');
						if (projectId) {
							projectIntersections[projectId] = entry.isIntersecting;
							projectIntersections = { ...projectIntersections };
						}
					});
				},
				{
					threshold: 0.5, // Trigger when 30% visible (earlier appearance)
					rootMargin: '0px 0px -10% 0px' // Negative bottom margin means it will trigger slightly before element leaves viewport
				}
			);

			// Observe all project sections
			document.querySelectorAll('.project-section').forEach((section) => {
				observer.observe(section);
			});

			return () => {
				observer.disconnect();
			};
		}
	});

	function handleMouseMove(event: MouseEvent) {
		if (!hoveredMedia) return;
		lastMouseEvent = event;
		if (rafId) return;
		rafId = requestAnimationFrame(() => {
			if (!hoveredMedia || !lastMouseEvent) {
				rafId = 0;
				return;
			}

			const rect = hoveredMedia.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			mouseX = (lastMouseEvent.clientX - centerX) / (rect.width / 2);
			mouseY = (lastMouseEvent.clientY - centerY) / (rect.height / 2);
			rafId = 0;
		});
	}

	function handleMouseEnter(event: MouseEvent) {
		hoveredMedia = event.currentTarget as HTMLElement;
	}

	function handleMouseLeave() {
		mouseX = 0;
		mouseY = 0;
		hoveredMedia = null;
		if (rafId) {
			cancelAnimationFrame(rafId);
			rafId = 0;
		}
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

<div
	id="projects"
	class="projects"
	class:show-override={!!$hoverLabel}
	class:safari={isSafari}
	role="presentation"
	on:mousemove={handleMouseMove}
>
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
										{#if $hoverLabel}
											<span class="project-name">{$hoverLabel}</span>
										{:else}
											<span class="project-name">{project.work}</span>
											<span class="project-type">for {project.credits.agency}</span>
											<span class="project-desc"> in {project.year}</span>
										{/if}
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
						class:visible={isMobile && projectIntersections[project.id]}
						role="img"
						on:mouseenter={handleMouseEnter}
						on:mouseleave={handleMouseLeave}
						style="transform: translate(-50%, -50%) 
                    perspective(1000px) 
                    rotateY({mouseX * 10}deg) 
                    rotateX({-mouseY * 10}deg)"
					>
						{#if project.media[0].type === 'image'}
							<picture>
								<!-- Mobile image -->
								<source
									media="(max-width: 767px)"
									srcset={`/images/${project.media[0].projectId}/mobile/${project.media[0].filename}`}
								/>
								<!-- Desktop image (default) -->
								<img
									src={`/images/${project.media[0].projectId}/desktop/${project.media[0].filename}`}
									alt={project.media[0].alt || project.name}
									loading="lazy"
								/>
							</picture>
						{:else if project.media[0].type === 'video'}
							<video
								src={`/images/${project.media[0].projectId}/${project.media[0].filename}`}
								controls={false}
								autoplay
								muted
								loop
								playsinline
							></video>
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
		min-height: 100vh;
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
		max-width: 80vw;
		max-height: 80vh;
		top: 50%;
		left: 50%;
		z-index: 1;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.35s ease;
		mix-blend-mode: exclusion;
		transform-style: preserve-3d;
		will-change: transform, opacity;
	}

	.hover-media img,
	.hover-media video {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		backface-visibility: hidden;
		border-radius: 5px;
	}

	.project-title:hover .hover-media {
		opacity: 1;
		pointer-events: auto;
	}

	/* Show media when in mobile viewport */
	.hover-media.visible {
		opacity: 1;
		pointer-events: auto;
	}

	/* Safari perf tweaks */
	.projects.safari .hover-media {
		mix-blend-mode: normal;
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
		color: #163e00;
	}

	.project-title:hover ~ .arrow-container .arrow {
		opacity: 0.2;
	}

	h2 {
		font-family: var(--font-display);
		font-size: clamp(60px, 10vw, 110px);
		font-weight: 400;
		letter-spacing: var(--tracking-tight);
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

	.projects.show-override .arrow:not(.last-column) .hover-content {
		opacity: 1;
	}

	/* Media query for mobile devices */
	@media (hover: none) {
		.project-section:has(.visible) .arrow {
			opacity: 1;
		}

		.project-section:has(.visible) .arrow:not(.last-column) .hover-content {
			opacity: 1;
		}

		.hover-media.visible {
			max-width: 90vw; /* Make images larger on mobile */
			max-height: 90vh;
			transition: opacity 0.6s ease;
		}
	}
</style>

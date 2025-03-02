<script lang="ts">
	import type { ProjectData } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import { projects } from '$lib/data/projects';
	import { isTransitioning } from '$lib/stores/transition';
	import ProjectArrowsDetail from '$lib/components/ProjectArrowsDetail.svelte';
	import { goto } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';
	import { tick } from 'svelte';

	// State
	let showIframe = false;
	let isMobile = false;
	let viewportWidth: number;
	let mounted = false;
	let articleElement: HTMLElement | null = null;

	// Props
	export let data: ProjectData;
	$: ({ project } = data);
	$: currentIndex = projects.findIndex((p) => p.id === project.id);
	$: nextProject = projects[(currentIndex + 1) % projects.length];

	// Animation timing constants
	const FADE_DURATION = 300; // ms
	const INITIAL_ANIMATION_DELAY = 150; // ms

	let isTransitioning_unsubscribe = isTransitioning.subscribe((value) => {
		if (value && articleElement) {
			articleElement.style.pointerEvents = 'none';
		} else if (articleElement) {
			articleElement.style.pointerEvents = 'auto';
		}
	});

	// Funktion zum Überprüfen, ob ein Bild existiert
	async function imageExists(url: string): Promise<boolean> {
		try {
			const response = await fetch(url, { method: 'HEAD' });
			return response.ok;
		} catch (error) {
			return false;
		}
	}

	// Funktion, um den korrekten Bildpfad zu erhalten
	async function getImageSources(item: any) {
		const desktopPath = `/images/${item.projectId}/desktop/${item.filename}`;
		const mobilePath = `/images/${item.projectId}/mobile/${item.filename}`;

		// Überprüfe, ob das mobile Bild existiert
		const hasMobile = await imageExists(mobilePath);

		return {
			desktop: desktopPath,
			mobile: hasMobile ? mobilePath : desktopPath
		};
	}

	// Speichere die geprüften Bildpfade
	let imageSourcesMap = new Map();

	async function applyInitialAnimations() {
		if (!mounted) return;

		await tick();
		const titleEl = document.querySelector('h1');
		if (titleEl instanceof HTMLElement) {
			titleEl.style.opacity = '1';
			titleEl.style.transform = 'translateY(0)';
			titleEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
		}

		// Animate content elements safely
		const contentEls = document.querySelectorAll('.project-info, .media-grid, .description');
		contentEls.forEach((el) => {
			if (el instanceof HTMLElement) {
				el.style.opacity = '1';
				el.style.transform = 'translateY(0)';
				el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
			}
		});
	}

	function updateViewportSize() {
		if (!mounted) return;
		viewportWidth = window.innerWidth;
		isMobile = viewportWidth < 768;
	}

	onMount(async () => {
		if (project.media) {
			for (const item of project.media) {
				if (item.type === 'image') {
					imageSourcesMap.set(item, await getImageSources(item));
				}
			}
		}
	});

	onMount(() => {
		mounted = true;
		updateViewportSize();

		tick().then(() => {
			articleElement = document.querySelector('article');

			// Initial animations mit einem Delay für DOM-Bereitschaft
			const animationTimer = setTimeout(applyInitialAnimations, INITIAL_ANIMATION_DELAY);

			// Add resize listener
			window.addEventListener('resize', updateViewportSize);

			return () => {
				mounted = false;
				clearTimeout(animationTimer);
				window.removeEventListener('resize', updateViewportSize);
				isTransitioning_unsubscribe();
			};
		});
	});

	// Neue sichere Methode zum Faden des Artikels
	function safelyFadeArticle(opacity: '0' | '1') {
		if (!mounted) return;

		// Versuche den Artikel zu finden, falls er noch nicht gecached wurde
		if (!articleElement) {
			articleElement = document.querySelector('article');
		}

		// Nur fortfahren, wenn das Element existiert
		if (articleElement instanceof HTMLElement) {
			articleElement.style.opacity = opacity;
			articleElement.style.transition = `opacity ${FADE_DURATION}ms ease`;
		}
	}

	async function handleNextProject(event: Event) {
		event.preventDefault();
		console.log('Click erkannt, Transition-Status:', $isTransitioning, 'Mounted:', mounted);

		if (!mounted || $isTransitioning) return;

		// Set transition state
		isTransitioning.set(true);
		showIframe = false;

		// Safely fade out
		safelyFadeArticle('0');

		// Wait briefly for visual effect then navigate
		setTimeout(async () => {
			try {
				await goto(`/projects/${nextProject.id}`, {
					replaceState: false,
					keepfocus: true
				});
			} catch (error) {
				console.warn('Navigation error:', error);
				// Wenn Navigation fehlschlägt, Sichtbarkeit wiederherstellen
				if (mounted) {
					safelyFadeArticle('1');
				}
			} finally {
				// Stelle sicher, dass der Transition-Status zurückgesetzt wird
				isTransitioning.set(false);
			}
		}, FADE_DURATION);
	}

	const safetyTimer = setTimeout(() => {
		// Falls die Navigation nicht klappt, nach 3 Sekunden zurücksetzen
		if ($isTransitioning) {
			console.log('Fallback: Transition-Status zurückgesetzt');
			isTransitioning.set(false);
			if (mounted) {
				safelyFadeArticle('1');
			}
		}
	}, 3000);

	afterNavigate(async () => {
		if (!mounted) return;

		// Reset transition state explicitly
		isTransitioning.set(false);

		// Reset scroll position
		window.scrollTo({ top: 0, behavior: 'instant' });

		// Reset iframe state
		showIframe = false;

		await tick(); // Warten auf DOM-Update

		// Need to get a fresh reference after navigation
		articleElement = document.querySelector('article');

		// Fade in mit einem kurzen Delay für DOM-Bereitschaft
		setTimeout(async () => {
			if (!mounted) return;

			safelyFadeArticle('1');

			// Apply entry animations after fade-in is complete
			setTimeout(applyInitialAnimations, FADE_DURATION);
		}, 50);
	});

	onDestroy(() => {
		// Stelle sicher, dass der Übergang-Status beim Verlassen zurückgesetzt wird
		isTransitioning.set(false);
		isTransitioning_unsubscribe();
	});
</script>

<svelte:head>
	<style>
		article {
			opacity: 0;
			transition:
				opacity 0.3s ease,
				background-color 0.8s ease-in-out;
		}
	</style>
</svelte:head>

{#if mounted}
	<ProjectArrowsDetail />
{/if}

<article>
	<!-- Header Section -->
	<header>
		<a href="/" class="nav-link home">Close Project</a>
		<a href="/about" class="nav-link about">Imprint</a>
	</header>

	<!-- Main Title -->
	<h1>{project.name}</h1>

	<!-- Project Info Grid -->
	<div class="project-info">
		<div class="column">
			<h2>PROJECT:</h2>
			<p>Client: {project.name}</p>
			<p>Work: {project.work}</p>
			<p>Date: {project.year}</p>
		</div>

		<div class="column">
			<h2>CREDITS:</h2>
			<p>Concept, Design, Code – {project.credits.agency}</p>
			<p>Code, Interface Design, Variable Font – {project.credits.personal}</p>
		</div>

		<div class="column">
			<h2>LINKS:</h2>
			<a href={project.url} target="_blank" rel="noopener noreferrer">
				{project.url}
			</a>
		</div>
	</div>
	<!-- Media Section -->
	{#if project.media && project.media.length > 0}
		<div class="media-grid">
			{#each project.media as item}
				{#if item.type === 'image'}
					<picture>
						{#if item.hasMobile}
							<!-- Mobile image -->
							<source
								media="(max-width: 767px)"
								srcset={`/images/${item.projectId}/mobile/${item.filename}`}
							/>
						{/if}
						<!-- Desktop image (default) -->
						<img
							src={`/images/${item.projectId}/desktop/${item.filename}`}
							alt={item.alt || project.name}
							loading="lazy"
						/>
					</picture>
				{:else if item.type === 'video'}
					<video
						src={`/images/${item.projectId}/${item.filename}`}
						controls={false}
						autoplay
						muted
						loop
						playsinline
					></video>
				{/if}
			{/each}
		</div>
	{/if}

	<div class="description">
		<h3 class="intro">{project.copy.intro}</h3>

		{#each project.copy.sections as section}
			<div class="section">
				<h3>{section.title}</h3>
				<p>{section.content}</p>
				{#if section.bulletPoints}
					<ul>
						{#each section.bulletPoints as point}
							<li>{point}</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}

		<p class="conclusion">{project.copy.conclusion}</p>
	</div>

	<footer class="next-project">
		<a
			href="/projects/{nextProject.id}"
			on:click|preventDefault={handleNextProject}
			class="next-project-link"
			aria-disabled={$isTransitioning || !mounted}
		>
			<span class="next-label">Next Project</span>
			<h2 class="next-title">{nextProject.name}</h2>
		</a>
	</footer>
</article>

<style>
	article {
		padding: 25px;
		min-height: 100vh;
		background-color: #111111;
		opacity: 0; /* Start invisible for transitions */
		transition:
			opacity 0.3s ease,
			background-color 0.8s ease-in-out;
	}

	.description {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.2;
		text-align: left;
		letter-spacing: -0.015em;
		padding: 10px;
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 768px) {
		.description {
			grid-template-columns: 1fr;
		}
	}

	.description p {
		margin-bottom: 1.5rem;
		color: white;
	}

	.description .intro {
		margin-bottom: 3rem;
		color: white;
	}

	.section {
		margin-bottom: 3rem;
		text-align: left;
		color: white;
	}

	.section ul {
		padding-left: 0;
		list-style-position: inside;
		max-width: 42.5rem;
		color: white;
	}

	.section h3,
	h3 {
		font-size: 1.5rem;
		line-height: 1.2;
		margin-bottom: 0.4rem;
		letter-spacing: -0.02em;
		font-weight: 400;
		color: white;
	}

	.section li {
		margin-bottom: 0.5rem;
		color: white;
	}

	.section li::marker {
		content: '— ';
		color: white;
		font-size: 1rem;
		font-family: var(--font-mono);
	}

	.conclusion {
		margin-top: 4rem;
		border-top: 1px solid white;
		padding-top: 0.5rem;
		font-size: 10px;
		line-height: 1.5;
		font-family: var(--font-mono);
		text-align: left;
	}

	.nav-link {
		font-size: 10px;
		text-decoration: underline;
		text-underline-offset: 0.2em;
		color: #000;
		position: fixed;
		z-index: 2; /* Über andere Elemente */
	}

	.nav-link:hover {
		color: blue;
	}

	.home {
		left: 2rem;
		top: 0.8rem;
		color: white;
	}
	.about {
		right: 2rem;
		bottom: 0.8rem;
		color: white;
	}

	h1,
	.project-info,
	.media-grid,
	.description {
		opacity: 0;
		transform: translateY(30px);
	}

	.next-project-link {
		transition: all 0.3s ease-in-out;
	}

	.next-project-link[aria-disabled='true'] {
		pointer-events: none;
		opacity: 0.7;
	}

	.next-title {
		/* ...existing styles... */
		transition:
			transform 0.6s ease-out,
			opacity 0.6s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	h1 {
		font-family: Helvetica, Arial, sans-serif;
		font-size: clamp(60px, 10vw, 110px);
		font-weight: 400;
		letter-spacing: -0.07em;
		line-height: 0.8;
		margin: 3rem 0 4rem 0;
		text-align: center;
		color: white;
	}

	.project-info {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 8rem;
		font-size: 10px;
	}

	.column {
		text-align: center;
	}

	.column h2 {
		font-size: 10px;
		color: white;
		margin: 0 0 1rem 0;
	}

	.column p {
		margin: 0 0 0.5rem 0;
		color: white;
	}

	.media-grid {
		display: grid;
		gap: 25px;
		justify-content: center;
		max-width: 100%;
		margin: 0 auto 10rem;
		grid-template-columns: minmax(0, 1fr); /* Prevent grid items from expanding beyond container */
	}

	.media-grid > :global(*) {
		width: 100%;
		display: block;
	}

	.media-grid :global(img),
	.media-grid :global(.cld-video-player) {
		width: 100% !important; /* Force same width */
		max-width: 100% !important;
		height: auto;
		margin: 0 auto;
		display: block;
	}

	/* Ensure video fills its container */
	.media-grid :global(.cld-video-player video) {
		width: 100%;
		height: auto !important;
		max-height: none !important;
		display: block;
		object-fit: contain; /* Ensure the entire video is visible */
	}

	.media-grid :global(.cld-video-player) {
		margin-bottom: 20px; /* Provide extra space below videos */
	}

	.media-grid :global(.cld-video-player),
	.media-grid :global(.cld-video-player > div) {
		width: 94% !important;
		max-width: 94% !important;
		background: transparent !important;
		min-height: fit-content !important;
		overflow: visible !important;
		box-sizing: border-box !important;
	}

	@media (max-width: 768px) {
		.project-info {
			grid-template-columns: 1fr;
		}
	}

	.next-project {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 1rem;
	}

	.next-project-link {
		text-decoration: none;
		color: white;
		width: 100%;
		text-align: center;
		display: block;
		cursor: pointer;
		padding: 2rem 0;
	}

	.next-project-link:hover .next-title {
		color: #666;
	}

	.next-label {
		font-size: 10px;
		text-transform: uppercase;
		margin: 0 auto;
		margin-bottom: 1rem;
	}

	.next-title {
		font-family: Helvetica, Arial, sans-serif;
		font-size: clamp(60px, 10vw, 110px);
		font-weight: 400;
		letter-spacing: -0.07em;
		line-height: 0.8;
		text-align: center;
	}
</style>

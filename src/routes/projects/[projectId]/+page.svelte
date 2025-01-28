<script lang="ts">
	import type { ProjectData } from '$lib/types';
	import { onMount, afterUpdate } from 'svelte';
	import { animate } from 'motion';
	import { projects } from '$lib/data/projects';
	import { isTransitioning } from '$lib/stores/transition';
	import { screenshotConfig } from '$lib/config/screenshot';
	import ProjectArrowsDetail from '$lib/components/ProjectArrowsDetail.svelte';
	import { goto } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';

	let showIframe = false;
	let isMobile = false;
	let viewportWidth: number;

	export let data: ProjectData;
	$: ({ project } = data);
	$: currentIndex = projects.findIndex((p) => p.id === project.id);
	$: nextProject = projects[(currentIndex + 1) % projects.length];

	$: screenshotDimension = isMobile
		? screenshotConfig.dimensions.mobile
		: screenshotConfig.dimensions.desktop;

	onMount(() => {
		const checkViewport = () => {
			viewportWidth = window.innerWidth;
			isMobile = viewportWidth < 768;
		};

		checkViewport();
		window.addEventListener('resize', checkViewport);

		animate(
			'h1',
			{
				opacity: [0, 1],
				y: [50, 0]
			},
			{ duration: 0.3, delay: 0.3 }
		);

		animate('.project-info, .media-grid, .description', {
			opacity: [0, 1],
			y: [30, 0]
		});

		return () => window.removeEventListener('resize', checkViewport);
	});

	async function handleNextProject(event: Event) {
		event.preventDefault();
		$isTransitioning = true;
		showIframe = false;

		await new Promise((resolve) => setTimeout(resolve, 50));

		try {
			await Promise.all([
				animate('article', { opacity: [1, 0] }, { duration: 0.3 }).finished,
				goto(`/projects/${nextProject.id}`, {
					replaceState: false,
					keepfocus: true
				})
			]);
		} finally {
			$isTransitioning = false;
		}
	}

	$: if ($isTransitioning) {
		showIframe = false;
	}

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
		showIframe = false; // Reset iframe state after navigation
	});

	afterUpdate(() => {
		animate('article', { opacity: [0, 1] }, { duration: 0.3 });
	});
</script>

<ProjectArrowsDetail />
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
					<img src={item.url} alt={item.alt} />
				{:else if item.type === 'video'}
					<video src={item.url} controls>
						<track kind="captions" srclang="en" label="English" />
					</video>
				{/if}
			{/each}
		</div>
	{:else}
		<div class="website-preview">
			{#if !showIframe}
				<div class="browser-header">
					<div class="browser-buttons">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="browser-address-bar">
						<span>{project.url}</span>
					</div>
				</div>
				<button
					class="preview-button"
					on:click={() => (showIframe = true)}
					aria-label="Load website preview"
				>
					<img
						src={`https://api.screenshotmachine.com?key=${screenshotConfig.apiKey}&url=${encodeURIComponent(project.url)}&dimension=${screenshotDimension}&device=${isMobile ? 'phone' : 'desktop'}`}
						alt={`Preview of ${project.name} website`}
					/>
					<div class="preview-overlay">
						<span>Click to load website preview</span>
					</div>
				</button>
			{:else}
				<div class="browser-header">
					<div class="browser-buttons">
						<span></span>
						<span></span>
						<span class="close-btn" on:click={() => (showIframe = false)}></span>
					</div>
					<div class="browser-address-bar">
						<span>{project.url}</span>
					</div>
				</div>
				{#if !$isTransitioning && showIframe}
					<div class="iframe-container">
						<iframe
							title={project.name}
							src={project.url}
							frameborder="0"
							loading="lazy"
							style="width: {isMobile ? '390px' : '100%'}; margin: 0 auto;"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						></iframe>
						<button
							class="close-iframe"
							on:click={() => (showIframe = false)}
							aria-label="Close preview"
						>
							✕
						</button>
					</div>
				{/if}
			{/if}
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
		<p class="conclusion">{project.copy.conclusion}</p>
	</div>

	<footer class="next-project">
		<a
			href="/projects/{nextProject.id}"
			on:click|preventDefault={handleNextProject}
			class="next-project-link"
		>
			<span class="next-label">Next Project</span>
			<h2 class="next-title">{nextProject.name}</h2>
		</a>
	</footer>
</article>

<style>
	.browser-window {
		border-radius: 8px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		background: #fff;
	}

	.browser-header {
		background: rgb(39, 52, 39);
		padding: 12px 16px;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.browser-buttons {
		display: flex;
		gap: 8px;
	}

	.browser-buttons span {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #ff5f56;
	}

	.browser-buttons span:nth-child(2) {
		background: #ffbd2e;
	}

	.browser-buttons span:nth-child(3) {
		background: #27c93f;
	}

	.browser-address-bar {
		flex: 1;
		background: #fff;
		border-radius: 4px;
		padding: 4px 12px;
		font-size: 13px;
		color: #666;
		font-family: var(--font-mono);
	}

	.website-preview {
		position: relative;
		width: 100%;
		background: #f5f5f5;
		border-radius: 4px;
		overflow: hidden;
	}

	.preview-button {
		width: 100%;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.preview-button img {
		width: 100%;
		height: auto;
		display: block;
	}

	.preview-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.preview-button:hover .preview-overlay {
		opacity: 1;
	}

	.iframe-container {
		position: relative;
		border-radius: 0 0 8px 8px;
		padding-top: 56.25%; /* 16:9 for desktop */
	}

	@media (max-width: 768px) {
		.iframe-container {
			padding-top: 216.4%; /* Mobile aspect ratio (844/390 = 2.164) */
			max-width: 390px;
			margin: 0 auto;
		}
	}

	.iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}

	.close-iframe {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.3s;
	}

	.close-iframe:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	article {
		padding: 25px;
		min-height: 100vh;
		background-color: #111111;
		transition: background-color 0.8s ease-in-out;
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
	}

	.media-grid img,
	.media-grid video {
		width: 100%;
		height: auto;
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
	}

	.next-project-link:hover {
		background-color: #f0f0f0;
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

<script lang="ts">
    import type { ProjectData } from '$lib/types';
    import { projects } from '$lib/data/projects'; 
    import ProjectArrowsDetail from '$lib/components/ProjectArrowsDetail.svelte';
    export let data: ProjectData;
    const { project } = data;


    const currentIndex = projects.findIndex(p => p.id === project.id);

    const nextProject = projects[(currentIndex + 1) % projects.length];
</script>


<ProjectArrowsDetail />
<article>
    <!-- Header Section -->
    <header>
        <div class="meta">
            <span>{project.name}</span>
            <span>{project.year}</span>
            <span>{project.type}</span>
        </div>
        <a href="/" class="nav-link home">Robert Burtzik</a>
        <a href="/projects" class="nav-link close">Close Project</a>
        <a href="/about" class="nav-link about">About</a>
        <a href="/photo" class="nav-link photo">Photo</a>
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
    {#if project.media}
        <div class="media-grid">
            {#each project.media as item}
                {#if item.type === 'image'}
                    <img src={item.url} alt={item.alt} />
                {:else if item.type === 'video'}
                    <video src={item.url} controls>
                        <track kind="captions" src={item.captions} srclang="en" label="English">
                    </video>
                {/if}
            {/each}
        </div>
    {/if}

    <div class="description">
        <p class="intro">{project.copy.intro}</p>
        
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
        <a href="/projects/{nextProject.id}" class="next-project-link">
            <span class="next-label">Next Project</span>
            <h2 class="next-title">{nextProject.name}</h2>
        </a>
    </footer>

</article>

<style>

    article {
        padding: 25px;
        min-height: 100vh;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 4rem;
    }


    .description {
        font-family: Helvetica, sans-serif;
        font-size: 1.5rem;
        line-height: 1.1;
        text-align: left;
        letter-spacing: -0.02em;
        width: 60vw;
    }


    @media (max-width: 768px) {
        .description {
            width: 90vw;
    }
    }


    .description p {
        margin-bottom: 1.5rem;
    }

    .description .intro {
        margin-bottom: 3rem;
    }

    .section {
        margin-bottom: 3rem;
        text-align: left;
    }

    .section ul {
        padding-left: 0;
        list-style-position: inside;
        max-width: 42.5rem;
    }

    .section h3 {
        font-size: 1.5rem;
        line-height: 1.1;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
        font-weight: 400;
    }

    .section li {
        margin-bottom: 0.5rem;
    }

    .conclusion {
        margin-top: 4rem;
    }

    .meta {
        font-size: 10px;
        position: fixed;
        left: 2rem;
        top: 0.8rem;
    }

    .meta span:not(:last-child)::after {
        content: ", ";
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
        width: 500px;
        background: white;
    }

    .close {
        right: 2rem;
        top: 0.8rem;
    }

    .about {
        right: 2rem;
        bottom: 0.8rem;
    }

    .photo {
        left: 2rem;
        bottom: 0.8rem;
        width: 500px;
        background: white;
    }

    h1 {
        font-family: Helvetica, Arial, sans-serif;
        font-size: clamp(60px, 10vw, 110px);
		font-weight: 400;
        letter-spacing: -0.07em;
        line-height: 0.8;
        margin: 0 0 4rem 0;
		text-align: center;
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
        margin: 0 0 1rem 0;
		
    }

    .column p {
        margin: 0 0 0.5rem 0;
		
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
        color: inherit;
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
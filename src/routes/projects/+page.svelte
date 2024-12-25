<script lang="ts">
    import ProjectArrows from '$lib/components/ProjectArrows.svelte';
</script>

<main>
    <ProjectArrows />
    <a href="/" class="nav-link home">Robert Burtzik</a>
    <a href="/" class="nav-link close">Close Projects</a>
    <a href="/about" class="nav-link about">About</a>
    <a href="/photo" class="nav-link photo">Photo</a>
</main>

<style>
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
</style>
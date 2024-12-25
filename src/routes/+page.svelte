<script lang="ts">
	import P5 from '$lib/components/p5.svelte';
	import ProjectArrowsDetail from '$lib/components/ProjectArrowsDetail.svelte';
	import { onMount } from 'svelte';

	let status: string = 'offline';
	let email: string;

	function decodeEmail(encoded: string): string {
		return encoded.replace(/[a-zA-Z]/g, function (c) {
			return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		});
	}

	let timeObj = { hours: '00', minutes: '00', seconds: '00' };

    function updateTime(): void {
        const now = new Date();
        timeObj = {
            hours: now.getHours().toString().padStart(2, '0'),
            minutes: now.getMinutes().toString().padStart(2, '0'),
            seconds: now.getSeconds().toString().padStart(2, '0')
        };

        if (now.getHours() >= 14 || now.getHours() < 2) {
            status = 'online';
        } else {
            status = 'offline';
        }

		status = (now.getHours() >= 14 || now.getHours() < 2) ? 'online' : 'offline';
    }

	onMount((): void => {
		updateTime();
		email = decodeEmail('eboregohegmvx@tznvy.pbz');
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});

	let mouseX = 0;
    let mouseY = 0;
    let hoveredLink: HTMLElement | null = null;
    let hoveredProject: string | null = null;

    function handleMouseMove(event: MouseEvent) {
        if (!hoveredLink) return;
        
        const rect = hoveredLink.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX = (event.clientX - centerX) / (rect.width / 2);
        mouseY = (event.clientY - centerY) / (rect.height / 2);
    }

    function handleMouseEnter(event: MouseEvent, projectId: string) {
        hoveredLink = event.currentTarget as HTMLElement;
        hoveredProject = projectId;
    }

    function handleMouseLeave() {
        mouseX = 0;
        mouseY = 0;
        hoveredLink = null;
        hoveredProject = null;
    }
</script>

    <ProjectArrowsDetail />
	<main on:mousemove={handleMouseMove}>
		<a href="/" class="nav-link home">Robert Burtzik</a>
		<a href="/projects" class="nav-link close">Projects</a>
		<a href="/about" class="nav-link about">About</a>
		<a href="/photo" class="nav-link photo">Photo</a>
		<div class="clock nav-link">
			{timeObj.hours}<span class="blink">:</span>{timeObj.minutes}<span class="blink">:</span>{timeObj.seconds}
		</div>
	<div>
		<p class="intro">
			Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
			intersection of design, technology, and culture. He is currently <span class="status" data-status={status}>● {status}</span>. He has worked on various 
			<a href="/projects" rel="noopener noreferrer">projects</a> such as
			<a href="/projects/haus-der-kunst" rel="noopener noreferrer"
				>Haus der Kunst München</a
			>,
			<a href="/projects/hilti" rel="noopener noreferrer">Hilti</a>
		</p>
	</div>
	<P5/>

	<nav>
		<footer>
			<p>
				This site is a wandering flow, a collection of filaments, a promise of perception in both
				their analog and digital nature. It seeks to explore the motivations behind the creation of
				digital spaces and the ways in which they can be used to create new forms of expression.
			</p>
			<p>This place is built with svelte, vite and typescript and is running on vercel.</p>
			<p>Void Filamente was last updated on 21/09/2024</p>
			<a href="https://www.are.na/robert-burtzik/channels">Are.na</a>
			<a href="https://www.instagram.com/rburtzik">Instagram</a>
			<a href="mailto:{email}">Mail</a>
			<a href="https://cv.robertburtzik.com">CV</a>
			<p>© 2025 Robert Burtzik. All rights reserved.</p>
		</footer>
		<!-- <a href="/photo-space">Photo Space</a> -->
	</nav>
</main>

<style>
    main {
        padding: 1rem;
        margin: 0 auto;
        width: 100%;
        max-width: calc(97vw - 2rem);
        min-height: 90vh;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        main {
            width: 50vw;
            margin: 0 auto; 
        }
    }

    .intro {
        font-family: Helvetica, sans-serif;
        font-size: 1.5rem;
        line-height: 1.1;
        letter-spacing: -0.02em;
        margin-bottom: 2rem;
    }

    .status {
        font-weight: var(--font-weight-bold);
        color: var(--status-color);
    }

	:global([data-status="online"]) {
	--status-color: #3d6600;
	}

	:global([data-status="offline"]) {
		--status-color: #ff0000;
	}

	.blink {
        display: inline-block;
        animation: blink 2s infinite;
        animation-timing-function: steps(1, start);
		font-weight: var(--font-weight-bold);
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

	footer {
        margin: 5rem auto 0 auto;
        border: 1px double #000;
        padding: 1.5rem 2rem 1rem 2rem;
	}

	nav a {
		display: inline-block;
		text-underline-offset: 0.2em;
		color: #000;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav a:hover {
		color: blue;
	}

	.nav-link:hover {
		color: blue;
	}


    .nav-link {
        font-size: 10px;
        text-decoration: underline;
		text-underline-offset: 0.2em;
        color: #000;
        position: fixed;

    }

    .home {
        left: 2rem;
        top: 0.8rem;
        width: 500px;
        background: white;
    }

    .clock {
		left: 50%;
		transform: translateX(-50%);
        top: 0.8rem;
		text-decoration: none;
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
    }

</style>

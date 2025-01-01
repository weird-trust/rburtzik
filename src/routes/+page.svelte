<script lang="ts">
	import P5 from '$lib/components/p5.svelte';
	import ProjectArrows from '$lib/components/ProjectArrows.svelte';
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

		status = now.getHours() >= 14 || now.getHours() < 2 ? 'online' : 'offline';
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

	function handleClick(event: MouseEvent, href: string) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const element = document.querySelector(href);
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<main
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	on:mouseenter={(e) => handleMouseEnter(e, 'home')}
>
	<!-- <a href="/projects" class="nav-link close">Projects</a> -->
	<a href="/about" class="nav-link about">Imprint</a>
	<div class="clock nav-link">
		{timeObj.hours}<span class="blink">:</span>{timeObj.minutes}<span class="blink">:</span
		>{timeObj.seconds}
	</div>
	<div class="p5-wrapper">
		<P5 />
	</div>
	<div>
		<p class="intro">
			Robert Burtzik is a designer and developer based in Hamburg. He is interested in the
			intersection of design, technology, and culture. He is currently <span
				class="status"
				data-status={status}>● {status}</span
			>. He has recently worked on

			<a href="#haus-der-kunst" on:click={(e) => handleClick(e, '#haus-der-kunst')}
				>Haus der Kunst München</a
			>,
			<a href="#shoah-memorial" on:click={(e) => handleClick(e, '#shoah-memorial-frankfurt')}
				>Shoah Memorial Frankfurt</a
			>,
			<a href="#kampnagel" on:click={(e) => handleClick(e, '#kampnagel')}>Kampnagel</a>,
			<a
				href="#internet-changed-my-life"
				on:click={(e) => handleClick(e, '#internet-changed-my-life')}>internet changed my life</a
			>.
		</p>
	</div>

	<button
		class="scroll-hint"
		on:click={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
	>
		scroll to projects
	</button>
</main>
<ProjectArrows />

<style>
	main {
		padding: 1rem;
		margin: 0 auto;
		max-width: 800px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	:global(.p5-wrapper) {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		color: inherit;
		text-decoration: none;
		color: blue;
	}

	a:hover {
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 0.2em;
		color: blue;
	}

	.intro {
		font-family: Helvetica, sans-serif;
		font-size: 1.5rem;
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin-bottom: 2rem;
	}

	.scroll-hint {
		text-align: center;
		font-family: var(--font-mono);
		font-size: 10px;
		margin-bottom: 2rem;
	}

	button {
		background: none;
		border: none;
		font-family: var(--font-mono);
		font-size: 10px;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 0.2em;
		color: blue;
	}

	.status {
		color: var(--status-color);
	}

	:global([data-status='online']) {
		--status-color: #3d6600;
	}

	:global([data-status='offline']) {
		--status-color: #ff0000;
	}

	.blink {
		display: inline-block;
		animation: blink 2s infinite;
		animation-timing-function: steps(1, start);
		font-weight: var(--font-weight-bold);
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.nav-link:hover {
		color: blue;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.nav-link {
		font-size: 10px;
		text-decoration: none;
		color: #000;
		position: fixed;
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
</style>

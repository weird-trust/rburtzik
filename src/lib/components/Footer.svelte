<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	let email: string;
	export let showImprintDetails = false;
	const dispatch = createEventDispatcher();

	function decodeEmail(encoded: string): string {
		return atob(encoded);
	}

	function setHover(content: string | null) {
		dispatch('linkhover', { content });
	}

	onMount((): void => {
		email = decodeEmail('cm9iZXJ0LmJ1cnR6aWtAZ21haWwuY29t');
	});
</script>

<nav>
	<footer>
		<p>This place is built with svelte, vite and typescript and is running on vercel.</p>
		<p>It was last updated on 05/02/2026</p>
			{#if showImprintDetails}
				<p class="imprint-text">
					Fonts used:
					<a
						href="https://cursorfont.liebermannkiepereddemann.de/"
						on:mouseenter={() => setHover('cursorfont.liebermannkiepereddemann.de')}
						on:mouseleave={() => setHover(null)}
					>
						Cursor-Apple.otf
					</a>
					by Liebermann Kiepe Reddemann,
					<a
						href="https://commitmono.com/"
						on:mouseenter={() => setHover('commitmono.com')}
						on:mouseleave={() => setHover(null)}
					>
						Commit Mono
					</a>
					by Eigil Nikolajsen.
				</p>
			{/if}
			<a
				href="https://www.are.na/robert-burtzik/channels"
				on:mouseenter={() => setHover('are.na/robert-burtzik/channels')}
				on:mouseleave={() => setHover(null)}
			>
				Are.na
			</a>
			<a
				href="https://www.instagram.com/rburtzik"
				on:mouseenter={() => setHover('instagram.com/rburtzik')}
				on:mouseleave={() => setHover(null)}
			>
				Instagram
			</a>
			<a
				href="mailto:{email}"
				on:mouseenter={() => setHover(email)}
				on:mouseleave={() => setHover(null)}
			>
				Mail
			</a>
			<a
				href="https://cv.robertburtzik.com"
				on:mouseenter={() => setHover('cv.robertburtzik.com')}
				on:mouseleave={() => setHover(null)}
			>
				CV
			</a>
		<p>© 2026 <a href="/">Robert Burtzik</a>. All rights reserved.</p>
	</footer>
</nav>

<style>
	p {
		margin: 0 0 20px 0;
	}

	nav {
		position: relative;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 600px;
	}

	nav a {
		display: inline-block;
		text-underline-offset: 0.2em;
		color: var(--color-ink);
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav a:hover {
		color: blue;
	}

	footer {
		position: relative;
		border: 5px double var(--color-ink);
		padding: 1rem 2rem 0 2rem;
		font-size: 12px;
		margin: 0 auto;
		margin-bottom: 2rem;
	}
	@media (max-width: 768px) {
		footer {
			width: 70vw;
		}
	}

	a {
		color: var(--color-ink);
		text-decoration: none;
		text-underline-offset: 0.2em;
	}

	a:hover {
		color: blue;
	}

	.imprint-heading {
		margin-top: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.imprint-text {
		margin-top: 0;
		margin-bottom: 1rem;
	}
</style>

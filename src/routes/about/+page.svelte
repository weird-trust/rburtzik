<script lang="ts">
	import { onMount } from 'svelte';
	let email: string;
	const ROWS = 4;
	const COLS = 4;
	const rows = Array(ROWS).fill(null);
	const cols = Array(COLS).fill('/');

	function decodeEmail(encoded: string): string {
		return encoded.replace(/[a-zA-Z]/g, function (c) {
			return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		});
	}

	onMount((): void => {
		email = decodeEmail('eboregohegmvx@tznvy.pbz');
	});
</script>

<main>
	<section class="arrows-background">
		<div class="arrow-container">
			{#each rows as _, rowIndex}
				<div class="row">
					{#each cols as arrow, colIndex}
						<span class="arrow" class:last-column={colIndex === COLS - 1}>
							{arrow}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</section>
	<nav>
		<footer>
			<p>This place is built with svelte, vite and typescript and is running on vercel.</p>
			<p>It was last updated on 16/02/2025</p>
			<a href="https://www.are.na/robert-burtzik/channels">Are.na</a>
			<a href="https://www.instagram.com/rburtzik">Instagram</a>
			<a href="mailto:{email}">Mail</a>
			<a href="https://cv.robertburtzik.com">CV</a>
			<p>© 2025 Robert Burtzik. All rights reserved.</p>
		</footer>
	</nav>
</main>

<style>
	p {
		margin: 0 0 20px 0;
	}

	nav {
		bottom: 2rem;
		max-width: 800px;
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

	main {
		padding: 40px;
		max-width: 800px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		main {
			padding: 25px;
		}
	}

	footer {
		position: absolute;
		border: 1px double #000;
		padding: 1rem 2rem 0 2rem;
		font-size: 12px;
		width: 24vw;
		transform: translate(-50%, -50%);
		bottom: 0;
		left: 50%;
	}
	@media (max-width: 768px) {
		footer {
			width: 70vw;
		}
	}

	a {
		color: #000;
		text-decoration: none;
		text-underline-offset: 0.2em;
	}

	a:hover {
		color: blue;
	}

	.arrows-background {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
		color: black;
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
		line-height: 1;
	}

	.last-column {
		text-align: right;
	}
</style>

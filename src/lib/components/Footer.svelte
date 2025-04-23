<script lang="ts">
	import { onMount } from 'svelte';
	let email: string;

	function decodeEmail(encoded: string): string {
		return encoded.replace(/[a-zA-Z]/g, function (c) {
			return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		});
	}

	onMount((): void => {
		email = decodeEmail('ebore.ghegmvx@tznvy.pbz');
	});
</script>

<nav>
	<footer>
		<p>This place is built with svelte, vite and typescript and is running on vercel.</p>
		<p>It was last updated on 16/02/2025</p>
		<a href="https://www.are.na/robert-burtzik/channels">Are.na</a>
		<a href="https://www.instagram.com/rburtzik">Instagram</a>
		<a href="mailto:{email}">Mail</a>
		<a href="https://cv.robertburtzik.com">CV</a>
		<p>© 2025 <a href="/">Robert Burtzik</a>. All rights reserved.</p>
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
		color: #000;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	nav a:hover {
		color: blue;
	}

	footer {
		position: relative;
		border: 5px double #000;
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
		color: #000;
		text-decoration: none;
		text-underline-offset: 0.2em;
	}

	a:hover {
		color: blue;
	}
</style>

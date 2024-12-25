<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import '../app.css';
    let { children } = $props();
</script>

<ParaglideJS {i18n}>
        <header>
        </header>
            {@render children()}
        <footer>
        </footer>
</ParaglideJS>

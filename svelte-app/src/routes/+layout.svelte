<script>
    import { Navigation } from "$lib";
	import Footer from "$lib/Components/Footer.svelte";
    let { children } = $props();
</script>

<div id="background"></div>

<header>
    <Navigation />
</header>

<Footer />


{@render children()};
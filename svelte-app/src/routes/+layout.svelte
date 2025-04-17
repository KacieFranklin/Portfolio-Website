<script>
    import { Navigation } from "$lib";
    let { children } = $props();
</script>

<div id="background"></div>


<header>
    <Navigation />
</header>


{@render children()};
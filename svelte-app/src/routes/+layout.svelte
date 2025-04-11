<script>
    import { Navigation } from "$lib";
    let { children } = $props();
</script>


<header>
    <Navigation />
</header>


{@render children()};
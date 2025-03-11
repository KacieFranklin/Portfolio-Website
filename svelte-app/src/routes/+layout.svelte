<script>
    let { children } = $props();
</script>

<nav>
    <span><a href="/">Homepage</a></span>
    <span><a href="/">About Me</a></span>
    <span><a href="/">CV</a></span>
    <span><a href="/">Art Catagories</a></span>
    <span><a href="/">Game Catagories</a></span>
    <span><a href="/">Digital Art</a></span>
    <span><a href="/">Animation</a></span>
    <span><a href="/">Games College</a></span>
    <span><a href="/">Games Personal</a></span>
</nav>

{@render children()};
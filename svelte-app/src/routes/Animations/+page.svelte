<svelte:head>
    <title>Animations</title>
</svelte:head>

<script>
    import Card from "$lib/Components/Card.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="HeaderImg.png" title="Animations"></Header>

<div id="page-content">

    <div class="gallery">
        <Card photo="kraft.gif" />
        <Card photo="cainAnimation.gif" />
        <Card photo="zeroAnimation.gif" />
        <Card photo="hand.gif" />
    </div>

</div>
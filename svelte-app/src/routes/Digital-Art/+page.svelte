<svelte:head>
    <title>Digital Art</title>
</svelte:head>

<script>
    import Header from "$lib/Components/Header.svelte";
    import Card from "$lib/Components/Card.svelte";
</script>

<Header rectangle="HeaderImg.png" title="DigitalArt"></Header>

<div id="page-content">

    <div class="gallery">
        <Card photo="reaper.png" />
        <Card photo="cain.png" />
        <Card photo="puppeteer.png" />
        <Card photo="Zero2.png" />
        <Card photo="mikkel.png" />
        <Card photo="zero1.png" />
    </div>
</div>
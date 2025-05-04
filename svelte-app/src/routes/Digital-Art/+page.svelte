<svelte:head>
    <title>Digital Art</title>
</svelte:head>

<script>
    import { base } from '$app/paths';
    import Header from "$lib/Components/Header.svelte";
    import Card from "$lib/Components/Card.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="DigitalArt"></Header>

<div id="page-content">

    <div class="gallery">
        <Card photo="{base}/reaper.png" />
        <Card photo="{base}/cain.png" />
        <Card photo="{base}/puppeteer.png" />
        <Card photo="{base}/Zero2.png" />
        <Card photo="{base}/mikkel.png" />
        <Card photo="{base}/zero1.png" />
    </div>
    <br><br><br><br>
</div>
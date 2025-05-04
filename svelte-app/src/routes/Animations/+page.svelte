<svelte:head>
    <title>Animations</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import Card from "$lib/Components/Card.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="Animations"></Header>

<div id="page-content">

    <div class="gallery">
        <Card photo="{base}/kraft.gif" />
        <Card photo="{base}/cainAnimation.gif" />
        <Card photo="{base}/zeroAnimation.gif" />
        <Card photo="{base}/hand.gif" />
    </div>
    <br><br><br><br>
</div>
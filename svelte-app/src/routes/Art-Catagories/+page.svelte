<svelte:head>
    <title>Art Catagories</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import ArtCard from "$lib/Components/ArtCard.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="ArtCategories"></Header>

<div id="page-content">

    <div class="IconSelectors">
        <ArtCard photo="{base}/ArtSelectIconBlue.png" link="{base}/Animations" />
        <ArtCard photo="{base}/ArtSelectIconBlue.png" link="{base}/Digital-Art" />
    </div>
    <br><br><br><br>
</div>
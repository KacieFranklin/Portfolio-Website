<svelte:head>
    <title>Art Catagories</title>
</svelte:head>

<script>
    import ArtCard from "$lib/Components/ArtCard.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="HeaderImg.png" title="ArtCategories"></Header>

<div id="page-content">

    <div class="IconSelectors">
        <ArtCard photo="ArtSelectIconBlue.png" link="/Animations" />
        <ArtCard photo="ArtSelectIconBlue.png" link="/Digital-Art" />
    </div>
    <br><br><br><br>
</div>
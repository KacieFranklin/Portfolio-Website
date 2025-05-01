<svelte:head>
    <title>Game Catagories</title>
</svelte:head>

<script>
    import Header from "$lib/Components/Header.svelte";
    import GameCard from "$lib/Components/GameCard.svelte";
</script>

<Header rectangle="HeaderImg.png" title="GameCategories"></Header>

<div id="page-content">

    <div class="IconSelectors">
        <GameCard photo="GameSelectIconBlue.png" link="/Games-Personal" />
        <GameCard photo="GameSelectIconBlue.png" link="/Games-College" />
    </div>
</div>
<svelte:head>
    <title>Game Catagories</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import Header from "$lib/Components/Header.svelte";
    import GameCard from "$lib/Components/GameCard.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="GameCategories"></Header>

<div id="page-content">

    <div class="IconSelectors">
        <GameCard photo="{base}/GameSelectIconBlue.png" link="{base}/Games-Personal" />
        <GameCard photo="{base}/GameSelectIconBlue.png" link="{base}/Games-College" />
    </div>
    <br><br><br><br>
</div>
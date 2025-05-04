<svelte:head>
    <title>Homepage</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import HomeCard from "$lib/Components/HomeCard.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="Homepage"></Header>
		
<div id="page-content">

    <div class="content-home">

        <h2>Welcome to my website. My name is Kacie Franklin. I'm an aspiring artist and game creator. Below are pages that link to examples of my work, my CV as well as more information about myself.</h2>
        <br>
        <h3>Thanks for stopping by!</h3>

    </div>

    <div class="IconSelectors">
        <HomeCard photo="{base}/ArtSelectIconBlue.png" link="{base}/Art-Catagories" />
        <HomeCard photo="{base}/ArtSelectIconBlue.png" link="{base}/Game-Catagories" />
        <HomeCard photo="{base}/ArtSelectIconBlue.png" link="{base}/CV"/>
        <HomeCard photo="{base}/ArtSelectIconBlue.png" link="{base}/About-Me"/>
    </div>
    <br><br><br><br>
</div>
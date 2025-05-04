<svelte:head>
    <title>Homepage</title>
</svelte:head>

<script>
    import HomeCard from "$lib/Components/HomeCard.svelte";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="HeaderImg.png" title="Homepage"></Header>
		
<div id="page-content">

    <div class="content-home">

        <h2>Welcome to my website. My name is Kacie Franklin. I'm an aspiring artist and game creator. Below are pages that link to examples of my work, my CV as well as more information about myself.</h2>
        <br>
        <h3>Thanks for stopping by!</h3>

    </div>

    <div class="IconSelectors">
        <HomeCard photo="ArtSelectIconBlue.png" link="/Art-Catagories" />
        <HomeCard photo="ArtSelectIconBlue.png" link="/Game-Catagories" />
        <HomeCard photo="ArtSelectIconBlue.png" link="/CV"/>
        <HomeCard photo="ArtSelectIconBlue.png" link="/About-Me"/>
    </div>
    <br><br><br><br>
</div>
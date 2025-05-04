<svelte:head>
    <title>Games Personal</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="Personal"></Header>

<div id="page-content">

    <div class=screenshotMainPrsnl>
        <img src="{base}/godIsDead.gif" alt="God Is Dead gif of battle between the sightless" height="600px" width="470px">
    </div>

    <div class="headerBox">
        <h1>God Is Dead</h1>
        <a href="https://github.com/KacieFranklin/GodIsDead">Github Link</a>
    </div>

    <div class="pageTextPrsnl">
        <h2>                                          
            God Is Dead is an work-in-progress GB, GBC and GBA game I have began to create using GB Studio. It is an RPG, Boss Rush, Roguelike where God, creator of all life, has fallen.
            The creations, of this almighty being, fight in an tournament where the last one standing is crowned the new Creator of All.
            The player will take control of an unnamed entity capable of rebirth, who, like the rest of the creations aim, to become the new God.
        </h2>
    </div>

    <div class=screenshotMainTwoPrsnl>
        <img src="{base}/balloonBlaster.png" alt="Vertical mockup with balloons coming down the screen" height="800px" width="470px">
    </div>

    <div class="headerBoxTwoPrsnl">
        <h1>Balloon Blaster</h1>
        <a href="https://github.com/KacieFranklin/BalloonBlaster">Github Link</a>
    </div>

    <div class="pageTextTwoPrsnl">
        <h2>Balloon Blaster is an work-in-progress arcade style game where you get points by shooting balloons as they descend the screen.
            It is being created in Visual Studio using SFML and C++.
            Pink balloons give two hundred points, Blue balloons give four hundred and gold ones give six hundred.
            Minus ballons will take two hundred points and multiply balloons will multiply the score by two.
            The game ends when the player shoots a skull balloon where they will be shown their score.
        </h2>
        <br><br><br><br><br><br><br><br><br>
    </div>

   
</div>
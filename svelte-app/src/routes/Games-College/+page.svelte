<svelte:head>
    <title>Games College</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import Header from "$lib/Components/Header.svelte";
</script>

<Header rectangle="{base}/HeaderImg.png" title="Education"></Header>

<div id="page-content">

    <div class="screenshotMain">
        <img src="{base}/monochrome.png" alt="Game Screenshot Monochrome" width="470px" height="400px">
    </div>

    <div class="headerBox">
        <h1>MonoChrome</h1>
        <a href="https://github.com/PeterLowe/prototype24-red">Github Link</a>
    </div>

    <div class="pageText">
         <h2>MonoChrome, a  more simple rougelike, was created in SFML using C++. 
             I had come up with the original concept for this game which was then more fine tuned by the group I was working on this project with. 
             I mainly focused on the pixel art assets and animations rather than actually coding.
         </h2>
    </div>

    <div class="gifContent">
        <img src="{base}/detective.gif" alt="Detective Pixel Art Gif" height="400px" width="400px">
        <img src="{base}/crawler.gif" alt="Crawlling Body Pixel Art Gif" height="400px" width="400px">
        <img src="{base}/blinker.gif" alt="Blinking Top Hat Creature Pixel Art Gif" height="400px" width="400px">
    </div>
   
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div class="screenshotMainTwo">
        <img src="{base}/shortCircuit.png" alt="Game Screenshot Monochrome" height="400px" width="470px">
    </div>

    <div class="headerBoxTwo">
        <h1>Short Circuit</h1>
        <a href="https://codeberg.org/UI-Programming-24-25/Kacie-Franklin-C00299407-UI-Programming-Module-Project.git">Codeberg Link</a>
    </div>

    <div class="pageTextTwo">
         <h2>Short Circuit is a top-down web based game, created in Visual Code using HTML, CSS and JS. 
             The player takes control of a robot that is damaged and needs to collect items to repair itself.
             Each wire or wrench adds five to the repair score.
             If the player colides with the bug, they lose five repair points. 
             Depending on the repair score the player gets when the timer runs out, they will get one of three endings, a good end, neutral end or a bad end.
         </h2>
    </div>

    <div class="gifContentTwo">
        <img src="{base}/RoboWalk.gif" alt="Detective Pixel Art Gif" height="400px" width="400px">
        <img src="{base}/bugwalk.gif" alt="Crawlling Body Pixel Art Gif" height="400px" width="400px">
        <br><br><br><br><br><br><br><br><br>
    </div>

</div>
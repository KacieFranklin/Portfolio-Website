<script>
    export let photo = "/ArtSelectIconBlue.png";
    export let link ="/";
</script>

<div class="card">
    <a href={link}>
    <img src={photo} alt="Placeholder">
    </a>
</div>
<div class="content-art">
    <h1>Art</h1>
</div>
<div class="content-games">
    <h1>Games</h1>
</div>
<div class="content-cv">
    <h1>CV</h1>
</div>
<div class="content-about">
    <h1>About Me</h1>
</div>

<style>
    

    :global(.gallery > .card:first-child) {
        box-shadow: 10px 10px 15px rgb(#9fb2c2);
    }

    :global(.gallery > .card:last-child) {
        box-shadow: 10px 10px 15px rgb(#9fb2c2);
    }

    :global(.gallery > .card:hover) {
        transform: scale(1);
        box-shadow: 10px 10px rgb(#9fb2c2);
        z-index: 2;
    }

    :global(.gallery > .card:not(:hover)) {
        transform: scale(0.9);
        opacity: 0.8;
        box-shadow: 10px 10px 5px rgb(#9fb2c2);
    }

    .card{
        background:none;
        box-shadow: 0 0 15px rgba(159 178 194);
        overflow:hidden;
        width:220px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    

    .card >a> img{
        width:100%;
        height:auto;
    }

    .card:hover {
        transform: translateY(-20px);
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        box-shadow: 25px 25px 20px  rgb(159 178 194);
    }

    .content-art{
        text-align: center;
        color: black;
        position: absolute;
        left:11%;
        top:60%;
        transform: transform 0.3 ease;
        z-index: 6;
    }

    .content-games{
        text-align: center;
        color: black;
        position: absolute;
        left:33%;
        top:60%;
        z-index: 6;
    }

    .content-cv{
        text-align: center;
        color: black;
        position: absolute;
        right:36%;
        top:60%;
        transform: transform 0.3 ease;
        z-index: 6;
    }

    .content-about{
        text-align: center;
        color: black;
        position: absolute;
        right:7%;
        top:60%;
        z-index: 6;
    }






</style>
<script>
    export let photo = "/ArtSelectIconBlue.png";
    export let link ="/";
</script>

<div class="card">
    <a href={link}>
    <img src={photo} alt="Placeholder">
    </a>
</div>
<div class="content-animations">
    <h1>Animations</h1>
</div>
<div class="content-digitalArt">
    <h1>Digital Art</h1>
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
        width:320px;
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

    .content-animations{
        text-align: center;
        color: black;
        position: absolute;
        left:26%;
        top:44%;
        transform: transform 0.3 ease;
        z-index: 6;
    }

    .content-digitalArt{
        text-align: center;
        color: black;
        position: absolute;
        right:28%;
        top:44%;
        z-index: 6;
    }
</style>
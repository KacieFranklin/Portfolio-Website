<script>
    export let photo = "/GameSelectIconBlue.png";
    export let link ="/";
</script>

<div class="card">
    <a href={link}>
    <img src={photo} alt="Placeholder">
    </a>
</div>
<div class="content-personal">
    <h1>Personal</h1>
</div>
<div class="content-education">
    <h1>Education</h1>
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

    .content-personal{
        text-align: center;
        color: black;
        position: absolute;
        left:27%;
        top:44%;
        transform: transform 0.3 ease;
        z-index: 6;
    }

    .content-education{
        text-align: center;
        color: black;
        position: absolute;
        right:27%;
        top:44%;
        z-index: 6;
    }

    @media (max-width: 576px) {
        .content-education{
            top: 100vh;
        }
    }
</style>
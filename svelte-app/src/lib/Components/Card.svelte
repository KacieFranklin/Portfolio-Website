<script>
    export let photo = "/Placeholder.png";
</script>

<div class="card">
    <img src={photo} alt="Placeholder">
</div>

<style>
    

    :global(.gallery > .card:first-child) {
        border: 5px solid gold;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border: 5px solid cyan;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:last-child) {
        border: 5px solid crimson;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:hover) {
        transform: scale(1.5);
        box-shadow: 10px 10px rgb(240, 128, 240);
        z-index: 2;
    }

    :global(.gallery > .card:not(:hover)) {
        transform: scale(0.9);
        opacity: 0.8;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }
    
    :global(.gallery > .card:not(:first-child):not(:last-child):hover) {
        box-shadow: 10px 10px rgb(240, 128, 240);
    }

    :global(.gallery > .card:not(:first-child):not(:last-child):not(:hover)) {
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }


    .card{
        background:#21213c;
        border-radius: 18px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow:hidden;
        width:280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card > img{
        width:100%;
        height:auto;
        border-radius: 8px 8px 0 0;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        box-shadow: 15px 15px  rgb(240, 128, 240);
    }
</style>
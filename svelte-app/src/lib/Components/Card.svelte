<script>
    export let photo = "/Placeholder.png";
</script>

<div class="card">
    <img src={photo} alt="Placeholder">
</div>

<style>
    

    :global(.gallery > .card:first-child) {
        border: 5px dashed rgb(255, 255, 255);
    }

    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border: 5px dashed rgb(255, 255, 255);
    }

    :global(.gallery > .card:last-child) {
        border: 5px dashed rgb(255, 255, 255);
    }

    :global(.gallery > .card:hover) {
        transform: scale(1.5);
        z-index: 2;
    }

    :global(.gallery > .card:not(:hover)) {
        transform: scale(0.9);
        opacity: 0.8;
    }
    
    .card{
        background:#21213c;
        border-radius: 18px;
        overflow:hidden;
        width:280px;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .card > img{
        width:100%;
        height:auto;
        border-radius: 8px 8px 0 0;
    }

    .card:hover {
        transform: translateY(-5px);

    }
</style>
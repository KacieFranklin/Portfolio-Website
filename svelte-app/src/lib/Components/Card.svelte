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
        transform: scale(3.0);
        z-index: 2;
    }

    :global(.gallery > .card:not(:hover)) {
        transform: scale(0.9);
        opacity: 0.8;
    }
    
    .card{
        background: none;
        border-radius: 18px;
        overflow:hidden;
        width:500px;
        text-align: center;
        transition: transform 0.3s ease;
    }

    .card > img{
        width:100%;
        height:auto;
        
    }

    .card:hover {
        transform: translateY(-20px);

    }
</style>
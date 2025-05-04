<script>
    export let title = "Page Title";
    export let rectangle = "/HeaderImg.png"
</script>

<div class="headerImg">
    <img src={rectangle} alt="Header Rectangle Blue" width="335px" height="50px">

    <div class="content">
        <h1>{title}</h1>
    </div>
</div>

<style>
    .headerImg {
        position: absolute;
        top:2%;
        left:10%;
        z-index: 7;
        width: 20px;
        height:20px;
    }

    .content {
        position:absolute;
        flex-direction: row;
        text-align: left;
        top: 10%;
        color: black;
    }

    @media (max-width: 576px) {
        .headerImg{
            left: 1%;
            width:20px;
        }
       
    }
</style>
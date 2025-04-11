<script>
    let isOpen = false; // Menu state (open/closed)
    function toggleHamburger() {
        isOpen = !isOpen;
        return isOpen;
    }
</script>

<nav>
    <button class="burger" onclick={toggleHamburger} aria-label="Toggle navigation">
        ≡
    </button>

    <div class="hamburger-menu">
        <ul class:open={isOpen}>
            <span><a href="/home">Home</a></span>
            <span><a href="/About-Me">About Me</a></span>
            <span><a href="/CV">CV</a></span>
            <span><a href="/Art-Catagories">Art Catagories</a></span>
            <span><a href="/Animations">Animations</a></span>
            <span><a href="/Digital-Art">Digital Art</a></span>
            <span><a href="/Game-Catagories">Game Catagories</a></span>
            <span><a href="/Games-College">Games College</a></span>
            <span><a href="/Games-Personal">Games Personal</a></span>
        </ul>
    </div>
</nav>

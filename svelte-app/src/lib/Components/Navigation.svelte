<script>
    import { base } from "$app/paths";
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
            <span><a href="{base}/">Home</a></span>
            <span><a href="{base}/About-Me">About Me</a></span>
            <span><a href="{base}/CV">CV</a></span>
            <span><a href="{base}/Art-Catagories">Art Categories</a></span>
            <span><a href="{base}/Animations">Animations</a></span>
            <span><a href="{base}/Digital-Art">Digital Art</a></span>
            <span><a href="{base}/Game-Catagories">Game Categories</a></span>
            <span><a href="{base}/Games-College">Games Education</a></span>
            <span><a href="{base}/Games-Personal">Games Personal</a></span>
        </ul>
    </div>
</nav>

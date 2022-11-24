<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-main">
            <span>Hi, my name is </span>
            <h1 class="intro-name">Sven Risse.</h1>
            <h1>I'm an aspiring fullstack webdev.</h1>
            <p>
                I'm a software engineer, with a passion for new and exiting
                technologies and frameworks. <br />
                Currently, I'm focused on diving deep into Frontend Development
                with Vue and Nuxt.
            </p>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.intro-name {
    max-width: fit-content;
    border-right: 3px solid var(--vue-green);
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(44) 1s 1 normal both,
        blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 24em;
    }
}
@keyframes blinkTextCursor {
    from {
        border-right-color: var(--vue-green);
    }
    to {
        border-right-color: transparent;
    }
}
</style>

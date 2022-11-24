<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-main">
            <span class="intro-greeting">Hi, my name is </span>
            <h1 class="intro-name">Sven Risse.</h1>
            <h1 class="intro-description">I'm an aspiring  <span id="intro-description__job"> fullstack web developer</span>.</h1>
            <p class="intro-paragraph">
                I'm a software engineer, with a passion for new and exiting
                technologies and frameworks. <br />
                Currently, I'm focused on diving deep into Frontend Development
                with Vue and Nuxt, and taking first steps into the Backend with Node.js.
            </p>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.intro-greeting {
    font-size: 24px;
    color: var(--light-slate);
}

.intro-name {
    max-width: fit-content;
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 70px;
    color: var(--vue-green);
    border-right: 3px solid var(--vue-green);
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(44) 1s 1 normal both,
        blinkTextCursor 500ms steps(44) infinite normal;
}

.intro-description {
    font-size: 70px;
}

#intro-description__job {
    color: var(--vue-green);
}

.intro-paragraph {
    font-size: 30px;
    color: var(--lightest-slate);
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

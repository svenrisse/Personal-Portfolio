<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-main">
            <div class="app-about">
                <img
                    src="/img/logo-without_text.png"
                    alt="Logo"
                    id="logo-about"
                />
                <h1>About Me</h1>
                <p>
                    Hello! My name is Sven and I'm passionate for creating
                    things on the internet. My journey in Web Development
                    started in 2021 when I started learning the basics of HTML,
                    CSS and JavaScript.
                </p>
                <p>
                    Fast-forward to today and I've decided to pursue a career in
                    Fullstack Development and am currently in training at
                    Händlerbund and YAY! Digital.
                </p>
                <p>
                    Most of my free time is spent reading science fiction and
                    fantasy novels, cooking and powerlifting when not currently
                    writing code and working on side projects.
                </p>
            </div>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.app-about {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 1.5rem;
    }
}

#logo-about {
    height: 15vh;
    cursor: default;
}
</style>

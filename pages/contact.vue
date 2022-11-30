<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-contact">
            <h1 class="contact-header">Contact</h1>
            <p class="contact-content">
                As I am currently in training, I'm not actively looking for new
                opportunities, but nevertheless feel free to contact me anytime
                on my socials or my mail,
                <a href="mailto:sven@srisse.dev" id="contact-mail"
                    >sven@srisse.dev</a
                >
            </p>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.app-contact {
    width: 50vw;
    margin-top: 30vh;
}
.contact-header {
    text-align: center;
    font-family: var(--font-mono);
    font-size: 2.5rem;
}

.contact-content {
    font-size: 2rem;
}

#contact-mail {
    color: var(--vue-green);
}
</style>

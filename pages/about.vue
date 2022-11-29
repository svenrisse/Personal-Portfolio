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
                <p id="about-1">
                    Hello! My name is Sven and I'm passionate for creating
                    things on the internet. My journey in Web Development
                    started in 2021 when I started learning the basics of HTML,
                    CSS and JavaScript.
                </p>
                <p id="about-2">
                    Fast-forward to today and I've decided to pursue a career in
                    Fullstack Development and am currently in training at
                    Händlerbund and YAY! Digital.
                </p>
                <p id="about-3">
                    Most of my free time is spent reading science fiction and
                    fantasy novels, cooking and powerlifting when not currently
                    writing code and working on side projects.
                </p>

                <div class="app-about__tech" id="about-4">
                    <span class="header">My Tech Stack</span>
                    <div class="icons">
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5?retiredLocale=de"
                            class="tech-icon"
                            title="HTML5"
                        >
                            <Icon
                                name="vscode-icons:file-type-html"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            class="tech-icon"
                            title="CSS3"
                        >
                            <Icon
                                name="vscode-icons:file-type-css"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://sass-lang.com/"
                            class="tech-icon"
                            title="SCSS"
                        >
                            <Icon
                                name="vscode-icons:file-type-sass"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://www.javascript.com/"
                            class="tech-icon"
                            title="JavaScript"
                        >
                            <Icon
                                name="vscode-icons:file-type-js-official"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://www.typescriptlang.org/"
                            class="tech-icon"
                            title="TypeScript"
                        >
                            <Icon
                                name="vscode-icons:file-type-typescript-official"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://reactjs.org/"
                            class="tech-icon"
                            title="React.js"
                        >
                            <Icon
                                name="vscode-icons:file-type-reactjs"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://vuejs.org/"
                            class="tech-icon"
                            title="Vue.js"
                        >
                            <Icon
                                name="vscode-icons:file-type-vue"
                                size="3.5rem"
                            />
                        </a>
                        <a
                            href="https://nuxtjs.org/"
                            class="tech-icon"
                            title="Nuxt.js"
                        >
                            <Icon
                                name="vscode-icons:file-type-nuxt"
                                size="3.5rem"
                            />
                        </a>
                    </div>
                </div>
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

    #about-1 {
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
    }

    #about-2 {
        -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 3s; /* Firefox < 16 */
        -ms-animation: fadein 3s; /* Internet Explorer */
        -o-animation: fadein 3s; /* Opera < 12.1 */
        animation: fadein 3s;
    }

    #about-3 {
        -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
        -o-animation: fadein 4s; /* Opera < 12.1 */
        animation: fadein 4s;
    }

    #about-4 {
        -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
        -o-animation: fadein 4s; /* Opera < 12.1 */
        animation: fadein 4s;
    }
    .app-about__tech {
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
            font-size: 2rem;
            font-family: var(--font-mono);
            margin-top: 2vh;
            margin-bottom: 2vh;
        }

        .icons {
            .tech-icon {
                margin-left: 1.5vw;
            }
        }
    }
}

#logo-about {
    height: 15vh;
    cursor: default;
}
</style>

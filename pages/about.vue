<template>
    <div class="app">
        <Logo />
        <Navbar />

        <div class="app-about">
            <img src="/img/logo-without_text.png" alt="Logo" id="logo-about" />
            <h1 id="about-header">About Me</h1>
            <p id="about-1">
                Hello! My name is Sven and I'm passionately creating things on
                the internet. My journey in
                <span class="about-green">Web Development</span> started in 2021
                when I started learning the basics of
                <span class="about-green">HTML</span>,
                <span class="about-green">CSS</span> and
                <span class="about-green">JavaScript</span>.
            </p>
            <p id="about-2">
                Fast-forward to today and I've decided to pursue a career in
                <span class="about-green"> Fullstack Development </span> and am
                currently in training at
                <span class="about-green"> Händlerbund </span> and
                <span class="about-green"> YAY! Digital </span>.
            </p>
            <p id="about-3">
                Most of my free time is spent
                <span class="about-green"> reading </span> science fiction and
                fantasy novels, <span class="about-green"> cooking </span> and
                <span class="about-green"> powerlifting </span> when not
                currently writing code and working on
                <span class="about-green"> side projects </span>.
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
                        <Icon name="vscode-icons:file-type-css" size="3.5rem" />
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
                        <Icon name="vscode-icons:file-type-vue" size="3.5rem" />
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
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.app-about {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;

    p {
        font-size: 1.5rem;
    }
    #about-header {
        font-family: var(--font-mono);
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

    .about-green {
        color: var(--vue-green);
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
                display: inline-block;
                vertical-align: middle;
                -webkit-transform: perspective(1px) translateZ(0);
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            }
            .tech-icon:hover,
            .tech-icon:focus,
            .tech-icon:active {
                -webkit-animation-name: bob-on-hover-float, bob-on-hover;
                animation-name: bob-on-hover-float, bob-on-hover;
                -webkit-animation-duration: 0.3s, 1.5s;
                animation-duration: 0.3s, 1.5s;
                -webkit-animation-delay: 0s, 0.3s;
                animation-delay: 0s, 0.3s;
                -webkit-animation-timing-function: ease-out, ease-in-out;
                animation-timing-function: ease-out, ease-in-out;
                -webkit-animation-iteration-count: 1, infinite;
                animation-iteration-count: 1, infinite;
                -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
                -webkit-animation-direction: normal, alternate;
                animation-direction: normal, alternate;
            }
        }
    }
}

#logo-about {
    height: 15vh;
    cursor: default;
}
</style>

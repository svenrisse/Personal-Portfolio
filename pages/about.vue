<script setup lang="ts">
const exitingTech = [
    {
        link: "https://tailwindcss.com/",
        title: "TailwindCSS",
        iconName: "vscode-icons:file-type-tailwind",
    },
    {
        link: "https://www.typescriptlang.org/",
        title: "TypeScript",
        iconName: "vscode-icons:file-type-typescript-official",
    },
    {
        link: "https://reactjs.org/",
        title: "React.js",
        iconName: "vscode-icons:file-type-reactjs",
    },
    {
        link: "https://nextjs.org/",
        title: "Next.js",
        iconName: "vscode-icons:file-type-next",
    },
    {
        link: "https://www.prisma.io/",
        title: "Prisma",
        iconName: "vscode-icons:file-type-prisma",
    },
    {
        link: "https://trpc.io/",
        title: "tRPC",
        iconName: "logos:trpc",
    },
    {
        link: "https://nodejs.org/en/",
        title: "Node.js",
        iconName: "vscode-icons:file-type-node",
    },
];
const otherTech = [
    {
        link: "https://vuejs.org/",
        title: "Vue.js",
        iconName: "vscode-icons:file-type-vue",
    },
    {
        link: "https://nuxtjs.org/",
        title: "Nuxt.js",
        iconName: "vscode-icons:file-type-nuxt",
    },
    {
        link: "https://sass-lang.com/",
        title: "SCSS",
        iconName: "vscode-icons:file-type-scss",
    },
];
</script>

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
                <span class="about-green"> YAY! Digital</span>.
            </p>
            <p id="about-3">
                Most of my free time is spent
                <span class="about-green"> reading </span> science fiction and
                fantasy novels, <span class="about-green"> cooking </span> and
                <span class="about-green"> powerlifting </span> when not
                currently writing code and working on
                <span class="about-green"> side projects</span>.
            </p>

            <div class="app-about__tech" id="about-4">
                <span class="header">My Tech Stack</span>
                <div class="icons">
                    <a
                        v-for="tech in exitingTech"
                        :href="tech.link"
                        class="tech-icon"
                        :title="tech.title"
                    >
                        <Icon :name="tech.iconName" size="3.5rem" />
                    </a>
                </div>
            </div>
            <div class="app-about__tech" id="about-4">
                <span class="header">Other Tech I've worked with</span>
                <div class="icons">
                    <a
                        v-for="tech in otherTech"
                        :href="tech.link"
                        class="tech-icon"
                        :title="tech.title"
                    >
                        <Icon :name="tech.iconName" size="3.5rem" />
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
    margin-left: 5vw;
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    margin-bottom: 7.5vh;
    @media screen and (min-width: 640px) {
        margin-top: 10vh;
        height: 50vh;
    }
    p {
        font-size: 1.25rem;
        @media screen and (min-width: 640px) {
            font-size: 1.5rem;
        }
        @media screen and (min-width: 1500px) {
            font-size: 2rem;
        }
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
            text-align: center;
            width: 70vw;
            font-size: 2rem;
            font-family: var(--font-mono);
            margin-top: 2vh;
            margin-bottom: 2vh;
        }

        .icons {
            .tech-icon {
                margin-left: 2vw;
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

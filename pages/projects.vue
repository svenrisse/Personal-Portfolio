<template>
    <div class="app">
        <Logo />
        <Navbar />

        <div class="app-projects">
            <h1 class="projects-header">Some Projects I've built</h1>
            <ProjectExample
                imageLink="nuxt-portfolio.png"
                projectLink="https://www.srisse.dev/"
                title="Personal Portfolio"
                description="You are on it right now! I learned some Nuxt basics with this project while also deepening my understanding of Vue."
                technologies="Nuxt Vue TypeScript SCSS Vite"
                githubLink="Personal-Portfolio"
            />

            <ProjectExample
                imageLink="vue-to-do.png"
                projectLink="https://to-vue.vercel.app/"
                title="To-Vue"
                description="My first Vue.js project, a To Do app! While also being the first time I used routing and a BaaS, Firebase for Auth and Database."
                technologies="Vue Vue-Router Firebase Vite"
                githubLink="To-Vue"
            />

            <ProjectExample
                imageLink="react-tenzies.png"
                projectLink="https://tenzies-tawny.vercel.app/"
                title="Tenzies Game"
                description="Tenzies Game built with React. My first time using TypeScript! This is a project from the wonderful React Scrimba Course."
                technologies="React TypeScript Vite"
                githubLink="Tenzies"
            />
            <ProjectExample
                imageLink="react-to-do.png"
                projectLink="https://react-to-do-indol.vercel.app/"
                title="React To-Do App"
                description="My first solo React project. Typically a To Do app."
                technologies="React SCSS Vite"
                githubLink="React-To-Do"
            />
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.app-projects {
    margin-top: 20vh;
    width: 50vw;
}
</style>

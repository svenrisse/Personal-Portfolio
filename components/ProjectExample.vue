<script setup lang="ts">
defineProps<{
    imageLink: String;
    projectLink: String;
    title: String;
    description: String;
    technologies: String;
    githubLink: String;
}>();
</script>

<template>
    <div class="project-example">
        <a :href="`${projectLink}`">
            <img :src="`/img/${imageLink}`" />
        </a>
        <div class="project-text">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <span> {{ technologies }}</span>
            <a
                :href="`https://www.github.com/svenrisse/${githubLink}`"
                class="socials-icon"
                title="Github"
            >
                <br />
                <Icon name="mdi:github" size="2.5rem" />
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.project-example {
    display: flex;
    margin-bottom: 7.5vh;
    img {
        height: 30vh;
        width: 27.5vw;
        border: 1px solid var(--vue-green);
        border-radius: 10px;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    img:hover,
    img:focus,
    img:active {
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

    .project-text {
        height: 30vh;
        margin-left: 2vw;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        h1 {
            margin-top: 0;
            margin-bottom: 0;
            color: var(--vue-green);
        }

        p {
            width: 20vw;
            margin-left: -5vw;
            background-color: var(--lightest-navy);
            border-radius: 10px;
            padding: 3vh;
            font-size: 1.25rem;
            z-index: 1;
            box-shadow: 0 10px 30px -15px var(--navy-shadow);
        }

        span {
            font-family: var(--font-mono);
        }
    }
}
</style>

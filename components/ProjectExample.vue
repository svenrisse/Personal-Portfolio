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
            <h1> {{ title }} </h1>
            <p> {{description}} </p>
            <span> {{ technologies }}</span>
            <a :href="`https://www.github.com/svenrisse/${githubLink}`" class="socials-icon" title="Github">
            <br />
            <Icon name="mdi:github" size="2.5rem" />
        </a>
        </div>
    </div>
</template>

<style lang="scss">
.project-example {
    display: flex;
    img {
        height: 20vh;
        padding: 1rem;
        border: 1px solid var(--vue-green);
        border-radius: 10px;
    }

    .project-text {
        margin-left: 2vw;
    }
}
</style>

<template>
    <nav class="navbar">
        <NuxtLink class="navbar-link" to="/about">About</NuxtLink>
        <NuxtLink class="navbar-link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="navbar-link" to="/work">Work</NuxtLink>
        <NuxtLink class="navbar-link" to="/contact">Contact</NuxtLink>
    </nav>
</template>

<style lang="scss">
    .navbar {
        position: fixed;
        right: 4vw;
        font-family: var(--font-mono);
    }

    .navbar-link {
        margin-left: 2vw;
        text-decoration: none;
        color: var(--lightest-slate);
    }
    .navbar-link:hover {
        color: var(--vue-green);
    }
</style>

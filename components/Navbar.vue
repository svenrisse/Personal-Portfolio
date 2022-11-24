<template>
    <nav class="navbar">
        <NuxtLink class="navbar-link" id="navbar-link__about" to="/about">About</NuxtLink>
        <NuxtLink class="navbar-link" id="navbar-link__projects" to="/projects">Projects</NuxtLink>
        <NuxtLink class="navbar-link" id="navbar-link__work" to="/work">Work</NuxtLink>
        <NuxtLink class="navbar-link" id="navbar-link__contact" to="/contact">Contact</NuxtLink>
    </nav>
</template>

<style lang="scss">
.navbar {
    position: fixed;
    right: 4vw;
    font-family: var(--font-mono);
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.navbar-link {
    margin-left: 2vw;
    text-decoration: none;
    color: var(--lightest-slate);
}
.navbar-link:hover {
    color: var(--vue-green);
}

#navbar-link__about {
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
}

#navbar-link__projects{
    -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1.5s; /* Firefox < 16 */
    -ms-animation: fadein 1.5s; /* Internet Explorer */
    -o-animation: fadein 1.5s; /* Opera < 12.1 */
    animation: fadein 1.5s;
}

#navbar-link__work {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
}

#navbar-link__contact {
    -webkit-animation: fadein 2.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2.5s; /* Firefox < 16 */
    -ms-animation: fadein 2.5s; /* Internet Explorer */
    -o-animation: fadein 2.5s; /* Opera < 12.1 */
    animation: fadein 2.5s;
}
</style>

<template>
    <a href="mailto:sven@srisse.dev" class="mail-link">sven@srisse.dev</a>
</template>

<style lang="scss">
    .mail-link {
        display: none;
        position: fixed;
        bottom: 5%;
        right: 4%;
        text-decoration: none;
        writing-mode: vertical-rl;

        @media screen and (min-width: 640px) {
            display: initial;
        }
    }
</style>
<template>
    <div class="socials">
        <a href="https://github.com/svenrisse" class="socials-icon">
            <Icon name="uil:github" size="2.5rem" />
        </a>
        <a href="https://www.linkedin.com/in/sven-risse-3b2262251/">
            <Icon name="uil:linkedin" size="2.5rem" class="socials-icon" />
        </a>
        <a href="mailto:sven@srisse.dev">
            <Icon name="material-symbols:mail-rounded" size="2.5rem" class="socials-icon" />
        </a>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.socials {
    position: fixed;
    left: 1%;
    bottom: 5%;
    height: 17.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
a {
    color: var(--white);
    &:hover {
        color: var(--vue-green);
    }
}
</style>

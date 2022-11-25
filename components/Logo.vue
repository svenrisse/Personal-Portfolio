<template>
    <img src="/img/logo.png" alt="Logo" class="logo" @click="moveToHome">
</template>

<script setup lang="ts">
    const router = useRouter()
    function moveToHome() {
        router.push({path: "/"})
    }
</script>

<style>
    img {
        cursor: pointer;
    }
</style>
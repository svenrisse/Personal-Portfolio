<template>
  <img src="/img/logo.png" alt="Logo Sven Risse" class="logo" @click="moveToHome" />
</template>

<script setup lang="ts">
const router = useRouter();
function moveToHome() {
  router.push({ path: "/" });
}
</script>

<style lang="scss">
.logo {
  position: absolute;
  left: 0;
  margin-left: -5vw;
  margin-top: -2vh;
  height: 20vh;
  border-radius: 100px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    position: fixed;
  }
}
</style>

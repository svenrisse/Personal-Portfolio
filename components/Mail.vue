<script setup lang='ts'>
</script>
<template>
  <a href="mailto:contact@svenrisse.com" class="mail-link">sven@svenrisse.dev</a>
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

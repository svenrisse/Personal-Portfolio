<template>
  <nav class="navbar">
    <NuxtLink class="navbar-link" id="navbar-link__about" to="/about"
      >About</NuxtLink
    >
    <NuxtLink class="navbar-link" id="navbar-link__projects" to="/projects"
      >Projects</NuxtLink
    >
    <NuxtLink class="navbar-link" id="navbar-link__work" to="/work"
      >Work</NuxtLink
    >
    <NuxtLink class="navbar-link" id="navbar-link__contact" to="/contact"
      >Contact</NuxtLink
    >
  </nav>
</template>

<style lang="scss">
.navbar {
  position: absolute;
  margin-top: 5vh;
  right: 1vw;
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

#navbar-link__about {
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

#navbar-link__projects {
  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  -ms-animation: fadein 3s; /* Internet Explorer */
  -o-animation: fadein 3s; /* Opera < 12.1 */
  animation: fadein 3s;
}

#navbar-link__work {
  -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 4s; /* Firefox < 16 */
  -ms-animation: fadein 4s; /* Internet Explorer */
  -o-animation: fadein 4s; /* Opera < 12.1 */
  animation: fadein 4s;
}

#navbar-link__contact {
  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 5s; /* Firefox < 16 */
  -ms-animation: fadein 5s; /* Internet Explorer */
  -o-animation: fadein 5s; /* Opera < 12.1 */
  animation: fadein 5s;
}

@media screen and (min-width: 1280px) {
  .navbar {
    position: fixed;
    right: 4vw;
  }
}
</style>

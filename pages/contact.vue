<template>
  <div class="app">
    <Logo />
    <Navbar />
    <div class="app-contact">
      <h1 class="contact-header">Contact</h1>
      <div class="contact-content">
        <p>
          I'm actively looking for new
          opportunities, so feel free to contact me anytime on my
          socials or my mail:
        </p>
        <a href="mailto:contact@svenrisse.com" id="contact-mail"
          >contact@svenrisse.com</a
        >
      </div>
    </div>
    <Socials />
    <Mail />
  </div>
</template>

<style lang="scss">
.app-contact {
  width: 60vw;
  margin-top: 30vh;
}
.contact-header {
  text-align: center;
  font-family: var(--font-mono);
  font-size: 2.5rem;
}

.contact-content {
  text-align: center;
  font-size: 1.25rem;
  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  -ms-animation: fadein 3s; /* Internet Explorer */
  -o-animation: fadein 3s; /* Opera < 12.1 */
  animation: fadein 3s;

  @media screen and (min-width: 640px) {
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1500px) {
    font-size: 2.5rem;
  }
}

#contact-mail {
  color: var(--vue-green);
}
</style>

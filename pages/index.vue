<template>
  <div class="app">
    <Logo />
    <Navbar />
    <div class="app-index">
      <span class="intro-greeting">Hi, my name is </span>
      <h2 class="intro-name">Sven Risse.</h2>
      <h1 class="intro-description">
        I'm an aspiring
        <span id="intro-description__job"> fullstack web developer</span>.
      </h1>
      <p class="intro-paragraph">
        I'm a software engineer, with a passion for new and exiting technologies
        and frameworks. <br />
        Currently, I'm focused on diving deep into Frontend Development with
        Next.js and React, and taking first steps into the Backend with Node.js.
      </p>
    </div>
    <Socials />
    <Mail />
  </div>
</template>

<style lang="scss">
.app-index {
  width: 65vw;
  margin-top: 25vh;
  margin-left: 5vw;
}
.intro-greeting {
  font-size: 1.25rem;
  color: var(--light-slate);
}

.intro-name {
  max-width: fit-content;
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size: 2.5rem;
  color: var(--vue-green);
  border-right: 3px solid var(--vue-green);
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

.intro-description {
  font-size: 2.25rem;
}

#intro-description__job {
  color: var(--vue-green);
}

.intro-paragraph {
  font-size: 1.25rem;
  color: var(--lightest-slate);
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 24em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: var(--vue-green);
  }
  to {
    border-right-color: transparent;
  }
}

@media screen and (min-width: 640px) {
  .app-index {
    margin-top: 18vh;
  }
  .intro-greeting {
    font-size: 2rem;
  }
  .intro-name {
    font-size: 4.25rem;
  }
  .intro-description {
    font-size: 4rem;
  }
  .intro-paragraph {
    font-size: 2.25rem;
  }
}

@media screen and (min-width: 1000px) {
  .intro-paragraph {
    text-align: justify;
  }
}

@media screen and (min-width: 1500px) {
  .app-index {
    width: 50vw;
  }
}

@media screen and (min-width: 2000px) {
  .app-index {
    margin-top: 30vh;
  }
  .intro-greeting {
    font-size: 2.5rem;
  }
  .intro-name {
    font-size: 5rem;
  }
  .intro-description {
    font-size: 5rem;
  }
  .intro-paragraph {
    font-size: 2.5rem;
  }
}
</style>

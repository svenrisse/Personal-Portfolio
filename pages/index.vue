<template>
    <div>
        <nav>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/work">Work</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
        <div class="introduction">
            <span>Hi, my name is </span>
            <h1>Sven Risse.</h1>
            <h1>I'm an aspiring fullstack webdev.</h1>
            <p>
                I'm a software engineer, with a passion for new and exiting
                technologies and frameworks. Currently, I'm focused on 
                diving deep into Frontend Development with Vue and Nuxt.

            </p>
        </div>
        <Socials />
    </div>
</template>

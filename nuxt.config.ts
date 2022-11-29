// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/main.scss"],

    modules: ["nuxt-icon"],

    app: {
        head: {
            title: "Sven Risse",
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    }
});

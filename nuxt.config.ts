// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],

  modules: ["nuxt-icon"],

  app: {
    head: {
      title: "Sven Risse",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          name: "description",
          content:
            "Personal Portfolio of Sven Risse, aspriring fullstack webdeveloper, based in Germany.",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});

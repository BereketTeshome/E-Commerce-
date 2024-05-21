// https://nuxt.com/docs/api/configuration/nuxt-config
// plugins: ["/pages/products/index.vue"],
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt APP",
      meta: [{ name: "description", content: "Nuxt.js Project" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    // server-side keys (SSR)
    secret: process.env.SERVER_SECRET,

    // client-side keys
    public: {
      secret: process.env.CLIENT_SECRET,
    },
  },
  routeRules: {
    "/api/*": { cache: { maxAge: 60 * 60 } },
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@prisma/nuxt"],
  colorMode: {
    preference: "light",
  },
});

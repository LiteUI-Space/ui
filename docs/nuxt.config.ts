// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image'],
  css: ['@unocss/reset/tailwind.css'],
  content: {
    highlight: {
      theme: 'vitesse-light'
    }
  },
  compatibilityDate: '2024-08-13'
})

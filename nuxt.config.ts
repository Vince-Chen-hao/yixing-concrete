export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/css/services-icons.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  nitro: { preset: 'netlify' },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/css/industry-refresh.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  nitro: { preset: 'netlify' },
})

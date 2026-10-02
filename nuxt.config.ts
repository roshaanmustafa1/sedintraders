import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-01-01',
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'Sedin Traders – Reliable. Strong. Sedin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Sedin Traders - Lahore-based electrical manufacturing and distribution company specializing in high-quality cables, plugs, sockets, and extension solutions for residential, commercial, and industrial use.'
        },
        { name: 'theme-color', content: '#151514' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})

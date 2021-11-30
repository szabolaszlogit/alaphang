export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [{
      id: "Cookiebot",
      src: "https://consent.cookiebot.com/uc.js",
      'data-cbid': "15211798-aa73-4602-979c-4b597af97e81",
      'data-blockingmode': "auto",
    }, ],
    htmlAttrs: {
      lang: 'hu',
    },
    title: 'Alaphang',
    titleTemplate: 'Tanulj gitározni | %s',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Gitároktatás az alapoktól mindenkinek.'
      }
    ],

    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg'
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  googleAnalytics: {
    id: 'UA-15526777-1'
  },

  'google-adsense': {
    id: 'ca-pub-3783587879253727'
  },

  sitemap: {
    hostname: 'https://www.alaphang.com',
    gzip: false,
    routes: [{}]
  }



}

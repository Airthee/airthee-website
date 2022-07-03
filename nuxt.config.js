require("dotenv").config();

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "Airthee - Welcome to my world",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Open Graph
      { name: "og:title", content: "Airthee - Welcome to my world" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://airthee.com" },

      // Twitter Card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@airthee" },
      { name: "twitter:title", content: "Airthee - Welcome to my world" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://kit.fontawesome.com/b99c705c2e.js",
        crossorigin: "anonymous",
      },
      {
        src: "/scripts/matomo.js",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/style.scss",
    "./node_modules/timeline-vuejs/dist/timeline-vuejs.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/aos/main.js", "~/plugins/i18n/main.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/dotenv",
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            file: "en-US.js",
            iso: "en-US",
            name: "English",
          },
          {
            code: "fr",
            file: "fr-FR.js",
            iso: "fr-FR",
            name: "Français",
          },
        ],
        defaultLocale: "fr",
        lazy: true,
        langDir: "i18n/",
        baseUrl: "https://airthee.com",
        seo: false,
      },
    ],
    // [
    //   '@nuxtjs/recaptcha', {
    //     hideBadge: false,
    //     siteKey: process.env.RECAPTCHA_SITE_KEY,
    //     version: 3
    //   }
    // ],
    "@nuxtjs/sitemap", // keep in last
  ],

  /**
   * Sitemamp configuration
   */
  sitemap: {
    hostname: "https://airthee.com",
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};

<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
  @charset "utf-8";
  @import "@/assets/css/variables";
  @import "@/node_modules/bulma/bulma.sass";

  body {
    overflow-x: hidden;
  }
</style>

<script>
import Footer from '@/components/Footer'

export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaDescription = this.$t('app.meta.description')

    return {
      htmlAttrs: {
        // Add some attrs here...
        ...i18nSeo.htmlAttrs
      },
      meta: [
        { name: 'description', hid: 'description', content: metaDescription },
        // Open Graph
        { name: 'og:description', content: metaDescription },
        // Twitter Card
        { name: 'twitter:description', content: metaDescription },
        ...i18nSeo.meta
      ],
      link: [
        // Add some links here...
        ...i18nSeo.link
      ]
    }
  },
  components: {
    Footer
  }
}
</script>

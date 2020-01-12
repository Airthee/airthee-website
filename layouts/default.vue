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
    return {
      htmlAttrs: {
        // Add some attrs here...
        ...i18nSeo.htmlAttrs
      },
      meta: [
        // Add some meta here...
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

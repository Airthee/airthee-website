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
  components: {
    Footer
  }
}
</script>

<template>
  <footer class="footer has-background-dark has-text-light">
    <!-- Github link -->
    <div class="content has-text-centered">
      <p>
        {{ $t('footer.githubText') }}
        <a rel="noreferrer noopener" target="_blank" href="https://github.com/Airthee/airthee-website">Github</a>.
      </p>

      <!-- Menu -->
      <p>
        <ul class="links">
          <li>
            <nuxt-link :to="localePath('index')" v-t="'footer.homeLabel'" />
          </li>
          <li>
            <nuxt-link :to="localePath('contact')" v-t="'footer.contactLabel'" />
          </li>
          <li>
            <nuxt-link :to="localePath('credits')" v-t="'footer.creditsLabel'" />
          </li>
        </ul>
      </p>

      <!-- Lang switch -->
      <p>
        {{ $t('footer.changeLangText') }} :
        <nuxt-link
          v-for="locale in availableLocales"
          v-html="locale.name"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        />
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    .links {
      li {
        display: inline-block;

        &:not(:last-child)::after {
          content: ' | ';
        }
      }
    }
  }
</style>

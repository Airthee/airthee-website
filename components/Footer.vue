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
            <nuxt-link :to="localePath('index')">
              {{ $t('footer.homeLabel') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('contact')">
              {{ $t('footer.contactLabel') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('credits')">
              {{ $t('footer.creditsLabel') }}
            </nuxt-link>
          </li>
        </ul>
      </p>

      <!-- Lang switch -->
      <p>
        {{ $t('footer.changeLangText') }} :
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
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

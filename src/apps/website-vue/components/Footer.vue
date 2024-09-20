<template>
  <footer class="footer has-background-dark has-text-light">
    <!-- Github link -->
    <div class="content has-text-centered">
      <div class="columns is-vcentered">
        <!-- Copyrights -->
        <div class="column">
          Copyright &copy; {{ new Date().getFullYear() }} Raphaël TISON
          (@Airthee)
        </div>

        <!-- Menu + Lang switch-->
        <div class="column">
          <div>
            <ul class="links">
              <li>
                <nuxt-link v-t="'footer.homeLabel'" :to="localePath('index')" />
              </li>
              <li>
                <nuxt-link
                  v-t="'footer.contactLabel'"
                  :to="localePath('contact')"
                />
              </li>
              <li>
                <nuxt-link
                  v-t="'footer.creditsLabel'"
                  :to="localePath('credits')"
                />
              </li>
            </ul>
          </div>
          <div>
            {{ $t("footer.changeLangText") }} :
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              v-html="locale.name"
            />
          </div>
        </div>

        <!-- Github link -->
        <div class="column">
          {{ $t("footer.githubText") }}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/Airthee/airthee-website"
            >Github</a
          >.
        </div>
      </div>
      <div class="columns">
        <div
          v-for="cryptoAccount in cryptoAccounts"
          :key="cryptoAccount.label"
          class="column"
        >
          <p>
            {{ cryptoAccount.label }}:
            <span class="crypto-address">{{ cryptoAccount.address }}</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      cryptoAccounts: [
        { label: "BTC", address: "bc1qj52hfzplxree78q42l0u70jv9pqgc5n23l5xtt" },
        { label: "ETH", address: "0xB7E23f028538F740b364aaa0524ea75f25107b57" },
      ],
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables";

footer {
  .links {
    li {
      display: inline-block;

      &:not(:last-child)::after {
        content: " | ";
      }
    }
  }

  a:hover {
    color: $grey-light;
  }

  .crypto-address:hover {
    text-decoration: underline;
  }
}
</style>

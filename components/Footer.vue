<template>
  <footer class="footer has-background-dark has-text-light">
    <div class="content has-text-centered">
      <p>
        You can see the sources of this project on
        <a noreferrer noopener target="_blank" href="https://github.com/Airthee/airthee-website">Github</a>.
      </p>
      <p>
        <ul class="links">
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/credits">
              Credits
            </nuxt-link>
          </li>
        </ul>
      </p>
    </div>
  </footer>
</template>

<script>
export default {

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

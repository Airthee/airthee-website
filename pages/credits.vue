<template>
  <section class="section has-background-white">
    <div class="container">
      <h1 class="title">
        Credits
      </h1>

      <div class="content">
        <p>
          I must confess to you, I'm not a good drawer... This is why I need some external resources
          to give you a satisfying experience.<br>
          So just a big "Thanks" to all these artists !
        </p>

        <div class="card credit-item">
          <div class="card-content">
            <div>Icons made by <a noreferer noopener target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </div>

        <div class="card credit-item">
          <div class="card-content">
            For the UI, I use <a noreferer noopener target="_blank" href="https://bulma.io/">Bulma</a> !<br>
            A great, simple and very light CSS framework with no Javascript.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .credit-item {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
</style>

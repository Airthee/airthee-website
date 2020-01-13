<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 v-t="'credits.title'" class="title" />
          <div v-for="(line, lineIndex) in $t('credits.mainText')" :key="lineIndex" v-html="line" class="container" />
        </div>
      </div>
    </section>

    <section class="section has-background-white">
      <div class="container">
        <div class="content">
          <div class="card credit-item">
            <div class="card-content">
              <div>Icons made by <a noreferer noopener target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
          </div>

          <div class="card credit-item">
            <div class="card-content">
              UI : <a noreferer noopener target="_blank" href="https://bulma.io/">Bulma</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .credit-item {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
</style>

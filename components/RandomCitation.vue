<template>
  <article class="message display-fade">
    <div class="message-body">
      <blockquote>
        {{ selectedCitation.text }}
        <footer>
          <cite>
            - {{ selectedCitation.author }}
          </cite>
        </footer>
      </blockquote>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      required: true
    },
    citations: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedCitation: null
    }
  },
  created () {
    // Select a citation randomly
    this.selectedCitation = this.randomCitation()
  },
  mounted () {
    // Pick a citation randomly every 10 second
    setInterval(() => { this.selectedCitation = this.randomCitation() }, this.interval)
  },
  methods: {
    /**
     * Method picking a citation randomly
     */
    randomCitation () {
      return this.citations[Math.floor(Math.random() * this.citations.length)]
    }
  }
}
</script>

<style>

</style>

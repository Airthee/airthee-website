<template>
  <div class="card">
    <div class="card-header">
      <div v-html="title" class="card-header-title" />
    </div>
    <div class="card-image">
      <img :src="imageUrl" :alt="`${title} logo`">
    </div>
    <div class="card-content">
      <div v-html="description" class="content" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      title: '',
      imageUrl: '',
      description: ''
    }
  },

  created () {
    // Get og data from url
    this.loadOgsData()
  },

  methods: {
    loadOgsData () {
      axios.get(this.link, {})
        .then((response) => {
          debugger
        })
    }
  }
}
</script>

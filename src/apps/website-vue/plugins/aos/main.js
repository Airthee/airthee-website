import Vue from 'vue'
import utils from './utils'

Vue.mixin({
  methods: {
    randomAOSAnimation () {
      return utils.randomAOSAnimation()
    }
  }
})

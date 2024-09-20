<template>
  <div :class="`scroll-${direction}`">
    <span class="icon">
      <a :href="target">
        <i class="fas fa-chevron-circle-down fa-2x" />
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: '#',
      required: true
    }
  },
  data () {
    return {
      direction: 'down'
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-down {
    text-align: center;

    .icon {
      margin-top: 2rem;
      animation: pulse 2s infinite;
    }
  }
</style>

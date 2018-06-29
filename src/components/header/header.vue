<template>
  <div class="header">
      header
    <img width="64" height="64" :src="seller.avatar">
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" tag="a" active-class="active">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" tag="a" active-class="active">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" tag="a" active-class="active">
          商家
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import { getSellerApi } from './api/seller'

export default {
  name: 'App',
  components: {
    'v-header': header
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.seller = this.getSeller()
  },
  methods: {
    getSeller () {
      getSellerApi().then((res) => {
        if (res.errno === 0) {
          this.seller = res.data
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom : 1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display : block
          font-size : 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>

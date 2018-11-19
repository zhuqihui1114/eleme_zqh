<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <div class="tab">
        <cube-tab-bar
          v-model="selectedLabel"
          :showSlider=true
          :useTransition=true
          :data="tabs"
          ref="tabBar"
          class="border-bottom-1px"
        >
        </cube-tab-bar>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'

import { getSellerApi } from './api/seller'

export default {
  name: 'App',
  components: {
    'v-header': header
  },
  data() {
    return {
      index: 0,
      seller: {
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      }
    },
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this.getSeller()
  },
  methods: {
    getSeller() {
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
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
      .tab
        display: flex
        flex-direction: column
        height: 100%
        >>> .cube-tab
          padding: 10px 0
        .slide-wrapper
          flex: 1
          overflow: hidden
</style>

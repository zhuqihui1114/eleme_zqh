<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support"></div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
      header

  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .content-wrapper
      padding : 24px 12px 18px 24px
      font-size : 0
      .avatar
        display : inline-block
        vertical-align: top
        img
          border-radius : 2px
      .content
        display : inline-block
        margin-left : 16px
        .title
          .brand
            display : inline-block
            vertical-align: top
            width: 30px
            height : 18px
            background-size: 30px 18px
            background-image: url("brand@2x.png")
          .name
            display : inline-block
            font-size : 16px
        .description
          font-size : 12px
</style>

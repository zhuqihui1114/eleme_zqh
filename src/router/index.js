import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router)

const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '*', // 404
    redirect: '/goods'
  },
  {
    path: '/', // 404
    redirect: 'seller'
  }
]

export default new Router({
  routes: routes // key 必须是routes
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入list组件
import List from '@/components/tabbar/list'
import Cart from '@/components/tabbar/cart'
export default new Router({
  routes: [
    {
      path: '/list',
      component: List
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path:"/",
      redirect:"/list"
    }
  ]
})

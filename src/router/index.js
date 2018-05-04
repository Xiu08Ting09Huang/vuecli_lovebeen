import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入list组件
import List from '@/components/list/list'

export default new Router({
  routes: [
    {
      path: '/list',
      component: List
    }
  ]
})

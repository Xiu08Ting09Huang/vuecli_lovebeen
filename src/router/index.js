import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 引入list组件
import List from '@/compontents/list/list'

export default new Router({
  routes: [
    {
      path: '/list',
      component: List
    }
  ]
})

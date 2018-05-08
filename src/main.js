import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
Vue.use(VueResource)

// 引入mui的样式
import "./assets/mui/css/mui.css"

import "./assets/mui/css/icons-extra.css"

import store from "./store/index"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store

})

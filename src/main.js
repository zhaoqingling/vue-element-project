// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './style/base.scss'
import '../static/font/iconfont.css'
import _ from 'lodash'
import storage from './common/storage' 

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch:{
    $route(to,from){
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home )
     // console.log(to,from)
      if(store.state.login.name == '') {
        router.push({ path: '/login' })
      } 
      
    }
  }
})

// console.log('session',storage.sessions.get('cmdb-login'));
// console.log('store-state',store.state)

// 判断是否是登录状态
if(store.state.login.name == '') {
  router.push({ path: '/login' })
} 


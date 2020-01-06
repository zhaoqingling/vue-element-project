import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login/login'
import container from '../page/container'
import index from '../page/index'
import layout from '../page/layout/router/route'
import sale from '../page/sale/router/route'
import manage from '../page/manage/router/route'
import demo from '../page/demo/router/route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: container,
      children:[
        {
          path: '',
          name: 'index',
          component:index
        },
        ...layout,
        ...sale,
        ...manage,
        ...demo
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})



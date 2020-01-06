
const demo = r => require.ensure([], () => r(require('../demo.vue')), 'demo')

const routes = [
  {

    name: 'demo',
    path: '/demo',
    meta: { breadName: 'demo', title: '样例'},
    component: demo
  }
]

export default routes
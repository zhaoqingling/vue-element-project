
const manage = r => require.ensure([], () => r(require('../list.vue')), 'manage')

const routes = [
  {
    name: 'manage',
    path: '/manage',
    meta: { breadName: '管理', title: '管理'},
    component: manage
  }
]

export default routes

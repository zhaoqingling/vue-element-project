
const layout = r => require.ensure([], () => r(require('../layout.vue')), 'layout')

const routes = [
  {

    name: '布局',
    path: 'layout',
    meta: { breadName: 'layout', title: '布局'},
    component: layout
  }
]

export default routes
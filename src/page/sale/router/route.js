const sale = r => require.ensure([], () => r(require('../list.vue')), 'sale')

const routes = [
  {
    name: 'sale',
    path: 'sale',
    meta: { breadName: '销售', title: '销售查询'},
    component: sale
  }
]

export default routes

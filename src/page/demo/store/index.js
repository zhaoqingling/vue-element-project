import * as actions from './action'
import mutations from './mutation'

export default {
  namespaced: true,
  state: {
    list: 5
  },
  actions,
  mutations
}

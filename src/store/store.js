
import Vue from 'vue'
import Vuex from 'vuex'
import layout from '../page/layout/store'
import sale from '../page/sale/store'
import $http from 'axios'
import storage from '../common/storage'

Vue.use(Vuex)

const state = {
  login:{
    name: storage.sessions.get('cmdb-login')? storage.sessions.get('cmdb-login').name : '',
    password: storage.sessions.get('cmdb-login')? storage.sessions.get('cmdb-login').password : ''
  },
  pjtnews: 0,
  count: 18
}
 
const mutations = {
  intoLogin(state,payload){
    state.login.name = payload.userName;
    state.login.password = payload.pass;
    // 将状态存储到sessionStorage中
    storage.sessions.set('cmdb-login',state.login);
  },
  add(state,payload) {
    state.count += payload;
  },
  reduce(state,payload) {
    state.count -= payload;
  }
}

const modules = {
  layout,
  sale
}

export default new Vuex.Store({
  state,
  mutations,
  modules
});
import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  task: {
    tasks: []
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

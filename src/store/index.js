import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:{
      id:1,
      nm:"北京"
    },
    changeCss: true,
  },
  mutations: {
    setCss(state) {
      state.changeCss = !state.changeCss
    }
  },
  actions: {},
  modules: {}
})
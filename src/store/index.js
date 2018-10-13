import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    viewportHeight: ''
  },
  getters: {
    getViewportHeight: state => {
      return state.viewportHeight
    }
  },
  mutations: {
    SET_VIEWPORT_HEIGHT (state, value) {
      state.viewportHeight = value
    }
  },
  actions: {
    setViewportHeight (context, value) {
      context.commit('SET_VIEWPORT_HEIGHT', value)
    }
  }
})

export default store

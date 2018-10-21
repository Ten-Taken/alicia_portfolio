import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    viewportHeight: '',
    navDrawer: false
  },
  getters: {
    getViewportHeight: state => {
      return state.viewportHeight
    },
    getNavDrawer: state => {
      return state.navDrawer
    }
  },
  mutations: {
    SET_VIEWPORT_HEIGHT (state, value) {
      state.viewportHeight = value
    },
    TOGGLE_NAV_DRAWER (state) {
      state.navDrawer = !state.navDrawer
    }
  },
  actions: {
    setViewportHeight (context, value) {
      context.commit('SET_VIEWPORT_HEIGHT', value)
    },
    toggleNavDrawer (context) {
      context.commit('TOGGLE_NAV_DRAWER')
    }
  }
})

export default store

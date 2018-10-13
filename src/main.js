// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as directives from 'vuetify/es5/directives'

import {
  Vuetify,
  VApp,
  VCard,
  VChip,
  VMenu,
  VBadge,
  VSelect,
  VParallax,
  VImg,
  VBottomNav,
  VCheckbox,
  VRadioGroup,
  VDatePicker,
  VSpeedDial,
  VProgressCircular,
  VAvatar,
  VDialog,
  VDivider,
  VSwitch,
  VTooltip,
  VTabs,
  VTextField,
  VNavigationDrawer,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VChip,
    VMenu,
    VBadge,
    VSelect,
    VImg,
    VParallax,
    VBottomNav,
    VCheckbox,
    VRadioGroup,
    VDatePicker,
    VSpeedDial,
    VProgressCircular,
    VAvatar,
    VDialog,
    VSwitch,
    VTooltip,
    VDivider,
    VTabs,
    VTextField,
    VNavigationDrawer,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    darkBlue: '#0c1960',
    yellowOrange: '#dbb418'

  },
  directives
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

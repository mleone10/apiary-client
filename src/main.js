import Vue from 'vue'
import Wrapper from './Wrapper'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#wrapper',
  router,
  render: h => h(Wrapper)
})

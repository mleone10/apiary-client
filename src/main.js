import Vue from 'vue'
import router from './router'
import Wrapper from './Wrapper'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#wrapper',
  router,
  render: h => h(Wrapper)
})

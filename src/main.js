import Vue from 'vue'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  render: h => h(Main)
})

new Vue({
  el: '#header',
  router,
  render: h => h(Header)
})

new Vue({
  el: '#footer',
  router,
  render: h => h(Footer)
})

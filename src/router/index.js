import Vue from 'vue'
import Router from 'vue-router'
import Apiary from '@/components/Apiary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Apiary',
      component: Apiary
    }
  ]
})

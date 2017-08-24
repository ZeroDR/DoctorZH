import Vue from 'vue'
import Router from 'vue-router'
import contend from '@/view/contend'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contend',
      component: contend
    }
  ]
})

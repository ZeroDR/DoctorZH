import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import contend from '@/view/contend'

Vue.use(Router);
Vue.use(Vues);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contend',
      component: contend
    }
  ]
})

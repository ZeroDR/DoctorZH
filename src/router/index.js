import Vue from 'vue'
import Router from 'vue-router'
import counted from '@/view/counted'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counted',
      component: counted
    }
  ]
})

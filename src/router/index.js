import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/view/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexMain',
      component: IndexMain
    }
  ]
})

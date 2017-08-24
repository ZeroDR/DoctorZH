import Vue from 'vue'
import Vuex from 'vuex'

import mapStore from './Modules/MapStore'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mapStore
  }
})

/**
 * Created by admin on 2017/8/24.
 */
//MapStore状态管理对象
const state = {
  count: 0,
  boxView: undefined
};

//MapStore状态设置对象
const mutations = {
  setBox(state, view){
    state.boxView = view;
  }
};

export default {
  state,
  mutations
}

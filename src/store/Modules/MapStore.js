/**
 * Created by admin on 2017/8/24.
 */
//MapStore状态管理对象
const state={
  map: undefined,
  count:0
};

//MapStore状态设置对象
const mutations={
  setMap(map){
    state.map = map;
  },
  getCount(){
    return count;
  }
};

export default {
  state,
  mutations
}

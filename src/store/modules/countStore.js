const state = {
  count: 3,
};
const actions = {};
const mutations = {};
const getters = {
  bigCount(state) {
    return state.count * 10;
  },
};
export default {
  namespaced: true, //开启命名空间
  state,
  actions,
  mutations,
  getters,
};

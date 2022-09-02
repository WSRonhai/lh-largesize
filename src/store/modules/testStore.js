export default {
  namespaced: true, //开启命名空间
  state: () => ({
    num: 3,
  }),
  mutations: {},
  actions: {},
  getters: {
    bigSum(state) {
      return state.num * 10;
    },
  },
};

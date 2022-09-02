import Vue from "vue";
import Vuex from "vuex";
import countStore from "./modules/countStore";
import testStore from "./modules/testStore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { countStore, testStore },
});

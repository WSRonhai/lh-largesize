import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import "./assets/scss/reset.scss";
import "./assets/scss/element-variables.scss";
//按需引入element
import "./plugins/element.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

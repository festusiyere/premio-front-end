import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { $axios } from "./plugins/axios";
import dayjs from "dayjs";
import store from "./store";

// Importing style
require("@/assets/scss/main.scss");

// Declaring axios globally
Vue.prototype.$axios = $axios;

// Filters
Vue.filter("formatDate", function (value) {
  return dayjs(value).format("MMM D, YYYY");
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

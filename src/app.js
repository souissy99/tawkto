import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import router from "./router.js";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  vuetify,
  router,
  render: (h) => h(App),
});

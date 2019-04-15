
import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import Home from "./components/home/Home.vue";
import Ash from "./components/ash/Ashleigh.vue";
import Tj from "./components/tj/Tj.vue";
import Matt from "./components/matt/Matt.vue";
import Lyndon from "./components/lyndon/Lyndon.vue";

import Designers from "./components/lyndon/Designers.vue";
import Projects from "./components/lyndon/Projects.vue";
import ModalPage from "./components/lyndon/ModalPage.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/ash", component: Ash },
  { path: "/tj", component: Tj },
  { path: "/matt", component: Matt },
  { path: "/lyndon", component: Lyndon },
  { path: "/designers", component: Designers },
  { path: "/projects", component: Projects, name: "projects", props: true },
  { path: "/modalPage", component: ModalPage, name: "ModalPage", props: true }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

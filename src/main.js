import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import Home from './components/home/Home.vue';

//Ash
import Ash from './components/ash/Ashleigh.vue';
import AshDesigner from './components/ash/AshDesigner.vue';

//Tj
import Tj from './components/tj/Tj.vue';
import Designers from './components/tj/designers/Designers.vue';
import Projects from './components/tj/projects/Projects.vue';

//Matt
import Matt from './components/matt/Matt.vue';

//Lyndon
import Lyndon from './components/lyndon/Lyndon.vue';
import LyndonDesigners from "./components/lyndon/LyndonDesigners.vue";
import LyndonProjects from "./components/lyndon/LyndonProjects.vue";
import LyndonProjectDetails from "./components/lyndon/LyndonProjectDetails.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  //Ash's Routes
  { path: '/ash', component: Ash },
  { path: '/ash-designer', component: AshDesigner, name: 'designer', props: true },
  //Tj's Routes
  { path: '/tj', component: Tj },
  { path: '/designers', component: Designers },
  { name: 'projects', path: '/projects', component: Projects, props: true  },
  //Matt's Routes
  { path: '/matt', component: Matt, name: 'matt', props: true},
  //Lyndon's Routes
  { path: '/lyndon', component: Lyndon },
  { path: "/lyndon-designers", component: LyndonDesigners },
  { path: "/lyndon-projects", component: LyndonProjects, name: "lyndon-projects", props: true },
  { path: "/lyndon-project-details", component: LyndonProjectDetails, name: "ProjectDetails", props: true }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

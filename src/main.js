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
import TjDesigners from './components/tj/designers/TjDesigners.vue';
import TjProjects from './components/tj/projects/TjProjects.vue';

//Matt
import Matt from './components/matt/Matt.vue';
import MattOurDesigners from './components/matt/MattOurDesigners.vue'
import MattProfile from './components/matt/MattProfile.vue'

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
  { path: '/tj-designers', component: TjDesigners },
  { path: '/tj-projects', component: TjProjects, name: 'projects', props: true  },
  //Matt's Routes
  { path: '/matt', component: Matt, name: 'matt', props: true},
  { path: '/MattOurDesigners', component: MattOurDesigners, name: 'OurDesigners', props: true},
  { path: '/MattProfile', component: MattProfile, name: 'MattProfile', props: true},
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

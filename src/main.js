import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

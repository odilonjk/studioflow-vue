import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import Hello from './components/hello/Hello.vue'
import About from './components/about/About.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  background: {
    color: 'grey',
    hue: '900'
  },
  primary: 'deep-orange',
  accent: 'green'
})

Vue.material.setCurrentTheme('default')

const routes = [
  { path: '', component: App },
  { path: '/hello', component: Hello },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  router
}).$mount('#app')

import Home from './components/home/Home.vue'
import About from './components/about/About.vue'

export const routes = [
  { path: '', component: Home, titulo: 'home' },
  { path: '/about', component: About, titulo: 'about' }
]

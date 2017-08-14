import Home from './components/home/Home.vue'
import Hello from './components/hello/Hello.vue';
import About from './components/about/About.vue';

export const routes = [
  { path: '', component: Home, titulo: 'home' },
  { path: '/hello', component: Hello, titulo: 'hello' },
  { path: '/about', component: About, titulo: 'about' }
]

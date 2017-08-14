<template>
  <div id="root">
    <studio-header :routes="routes"/>
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import { routes } from './routes'
import Header from './components/shared/header/Header.vue'

export default {
  components: {
    'studio-header': Header
  },
  data () {
    return {
      routes,
      menu: [
        {
          url: 'hello',
          descricao: 'hello'
        },
        {
          url: 'about',
          descricao: 'about'
        }
      ]
    }
  }
}
</script>

<style>

body {
  background-color: grey;
}

/* Estilo da transição entre componentes */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>

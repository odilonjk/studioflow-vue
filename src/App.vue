<template>
  <div id="root">
    <studio-header :routes="routes"/>
    <div class="container-fluid">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      <studio-footer/>
    </div>
  </div>
</template>

<script>
import { routes } from './routes'
import Header from './components/shared/header/Header.vue'
import Footer from './components/shared/footer/Footer.vue'

export default {
  components: {
    'studio-header': Header,
    'studio-footer': Footer
  },
  data () {
    return {
      routes
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
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>

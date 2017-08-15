<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="">
        <img src="src/assets/equalizer.png" width="30" height="30">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="route in routes" class="nav-item">
  	  				<router-link :to="route.path ? route.path : '/'" class="nav-link">{{ route.titulo }}</router-link>
    			</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      titulo: 'studioflow'
    }
  }
}
</script>

<style scoped>

</style>

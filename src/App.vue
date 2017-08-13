<template>
  <div id="app">
    <md-toolbar md-theme="black">
      <h1 class="md-title">studioflow</h1>
      <md-bottom-bar md-theme="default">
        <md-bottom-bar-item md-icon="group">Bandas</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="query_builder">Horários</md-bottom-bar-item>

      </md-bottom-bar>
    </md-toolbar>




    <div class="main-content" md-theme="black">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  background-color: black;
}

.md-title {
  color: teal;
}

.main-content {
  color: grey;
  padding: 16px;
}
</style>

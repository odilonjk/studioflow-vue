<template>
  <div class="container">
  	<div class="title-container">

  		<h1 class="title">{{ titulo }}</h1>


	  	<ul class="menu">
  			<li v-for="route in routes" class="lista">
	  				<router-link :to="route.path ? route.path : '/'" class="menu-item">{{ 	route.titulo }}</router-link>
  			</li>
  		</ul>
		</div>
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
.container .title-container {
	margin: auto;
	text-align: center;
	font-family: helvetica;
	display: table;

}
.container .title-container .title {
	border: 3px solid #e6e6e6;
	padding: 10px;
	width: 300px;
}
/* Estilo do menu do header */
.menu {
	margin-right: 40px;
	text-align: center;
}
.menu li {
	display: inline;
}
.menu li:not(:first-child):before {
  content: "|";
  opacity: 0.4;
}
.menu .menu-item {
	font-family: helvetica;
	font-weight: bold;
	color: #333;
	text-decoration: none;
	padding: 10px;
}
</style>

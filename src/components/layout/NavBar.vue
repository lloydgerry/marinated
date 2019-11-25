<template>
  <div class="nav-bar">
    <router-link to="/"><h1>Marinated</h1></router-link> 
    <div id="nav">
      <p> Login </p>
      <p> | </p>
      <router-link to="/about">About</router-link>
      <p> | </p>
      <router-link to="/recipe">Recipe</router-link>
      <p> | </p>
      <p>🔍Search</p>
    </div>
  </div>
</template>

<script>

import '../../styles/css/nav.css'

export default {
  name: 'NavBar'
}
</script>
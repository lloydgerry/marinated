<template>
  <div class="nav-bar">
      <div id="nav">
      <router-link to="/"><h1>Marinated</h1></router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mealplan">Meal Plan</router-link> |
      <router-link to="/recipe">Recipe</router-link> |
      <router-link to="/savedforlater">Saved For Later</router-link>

    </div>
  </div>
</template>

<script>

import '../../styles/css/nav.css'

export default {
  name: 'NavBar'
}
</script>
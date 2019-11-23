<template>
  <div class="about">
    <NavBar/>
    <h1>This is a recipe page</h1>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"

export default {
  name: 'recipe',
  components: {
    NavBar
  }
}
</script>
<template>
  <div class="about">
    <NavBar/>
    <RecipePage/>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import RecipePage from "../components/RecipePage"


export default {
  name: 'recipe',
  components: {
    NavBar,
    RecipePage
  }
}
</script>
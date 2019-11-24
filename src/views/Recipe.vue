<template>
  <div class="about">
    <NavBar/>
    <RecipePage/>
    {{recipes}}
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import RecipePage from "../components/RecipePage"
// import Recipes from './components/Recipes'

export default {
  name: 'recipe',
  components: {
    NavBar,
    RecipePage,
    // Recipes
  },
  data() {
    return {
      recipes: [
        { id: 1,
          title: "Cookies"
        },
        { id: 2,
          title: "Soup"
        }
      ]
    }
  },
  computed: {

  }

}
</script>
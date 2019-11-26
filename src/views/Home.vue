<template>
  <div class="home">
    <NavBar/>
    <div v-if="mealCardIsOpen">
      <PlanDrawer />
    </div>  
    <RecipeCardsCarousel />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/layout/NavBar.vue"
import PlanDrawer from "../components/PlanDrawer"
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel"

export default {
  name: 'home',
  components: {
    NavBar,
    PlanDrawer,
    RecipeCardsCarousel
  },
  data() {
    return {
      mealCardIsOpen: false
    }

  },
  methods: {
    mealCardClose() {
      this.mealCardIsOpen = false
    },
    mealCardOpen() {
      this.mealCardIsOpen = true
    }
  }
}
</script>

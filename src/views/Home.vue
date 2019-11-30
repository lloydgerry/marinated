<template>
  <div class="home">
    <NavBar/>
    <DivSpace/>
    <div v-if="mealCardIsOpen">
      <PlanDrawer />
    </div>  
    <RecipeCardsCarousel v-bind:RecipeCards="this.$store.state.recipes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"
import PlanDrawer from "../components/PlanDrawer"
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel"
// const axios = require('axios')

import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  state: {...mapState},
  components: {
    NavBar,
    PlanDrawer,
    RecipeCardsCarousel,
    DivSpace
  },
  computed: {
    updateRecipeCards () {
      return this.$store.state.recipes
    }
  },

  data() {
    return {
      mealCardIsOpen: false,
      RecipeCards: []

    }


  },
  created() {
    this.fetchAllRecipesData()
  },
  methods: {
    ...mapActions(['fetchAllRecipesData']),
    mealCardClose() {
      this.mealCardIsOpen = false
    },
    mealCardOpen() {
      this.mealCardIsOpen = true
    }
  }
}
</script>
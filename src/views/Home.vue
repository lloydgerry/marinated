<template>
  <div class="home">
    <NavBar/>
    <DivSpace/>
    <span>{{ errorMsg }}</span>
    <RecipeCardsCarousel v-bind:RecipeCards="this.$store.state.recipes"/>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel"

import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  state: {...mapState},
  components: {
    NavBar,
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
      RecipeCards: [],
      errorMsg: null
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.query.redirectFrom) {
      next(vm => {
        vm.errorMsg =
          "Sorry, You need to log in before being able to access that route"
      })
    } else {
      next()
    }
  },
  created() {
    this.fetchAllRecipesData()
  },
  methods: {
    ...mapActions(['fetchAllRecipesData']),
  }
}
</script>
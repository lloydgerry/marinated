<template>
  <div class="home">
    <NavBar/>
    <DivSpace/>
    <div class="error">{{ errorMsg }}</div>
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
        setTimeout(() => {vm.errorMsg = ''}, 10000)
        vm.errorMsg =
          "Sorry, you need to login before being able to access that content.";
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

<style scoped>

div {
  background-color: #181616;
  width: 100%;
}

div.error {
  margin-top: 20px;
  background-color: #181616;
  color: red;
  width: 100%;
  text-align: center;
}

</style>
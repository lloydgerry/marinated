<template>
    <div>
    <NavBar/>
    <DivSpace />
    <RecipeCardsCarousel v-bind:RecipeCards="this.recipes"/>
    </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue";
import DivSpace from "../components/layout/DivSpace.vue";
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel";
import store from '../store/index'
import { mapState } from "vuex";

export default {
  name: 'SavedForLater',
  state: {...mapState},
  components: {
    NavBar,
    DivSpace,
    RecipeCardsCarousel
  },
  data() {
    return {
      recipes: this.$store.state.userRecipes,
      userId: store.state.user.id
    }
  },
  computed: {
    updateUserRecipeCards() {
      return this.$store.state.userRecipes
    }
  },
  methods: {
  }
}
</script>
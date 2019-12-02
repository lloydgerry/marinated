<template>
    <div>
    <NavBar/>
    <DivSpace />
    <RecipeCardsCarousel v-bind:RecipeCards="this.recipes"/>
    <div class="about">
      <h1>This is a user's saved for later page</h1>
    </div>
    </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue";
import DivSpace from "../components/layout/DivSpace.vue";
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel";
import axios from "axios";
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
      recipes: [],
      userId: this.$store.state.user.id
    }
  },
  methods: {
    usersSavedRecipes: function() {
      console.log('userSavedRecipes fired')
    //  e.preventDefault();
      axios.get(`/api/user/${this.userId}/recipes`)
        .then(fetchedrecipe => {
          console.log("fetched recipe data: ", fetchedrecipe)
          this.recipes = fetchedrecipe.data
        })
        .catch(error => console.log("error in submitScraper in NewRecipe: ", error))
    },
    created() {
         this.usersSavedRecipes()
    },
    // computed: {
    //   updateRecipeCards() {
    //     return this.usersSavedRecipes(this.userId)
    //   }
    // }
  }
}
</script>
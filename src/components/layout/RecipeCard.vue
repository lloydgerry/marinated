<template>
  <div class="card-container">
   
    <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="card-link">
      <div v-if="recipe.image_url === '' || recipe.image_url === 'undefined'">
        <img src="../../assets/place_setting.jpg" class="card-media"/>
      </div>
      <div v-else >
        <img v-bind:src="recipe.image_url"  alt="" class="card-media"/>
      </div>
      
       <div v-if="loggedIn" class="favourite-icon" id="favourite-icon">
        <div v-if="userFav" >
          <img src="../../assets/heart-added-color.png" > 
        </div>
        <div v-else>
          <img src="../../assets/heart-add.png" v-on:click.prevent="addThisRecipeToUser" >
        </div>
      </div>
      <h2 class="card-title">{{recipe.title}} </h2>  
      
      <span class="card-summary subtle">{{recipe.summary}}</span>

    </router-link>  
    <div class="card-shadow"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {

  components: {

  },
  data() {
    return {
      userFav: false,
      recipes: this.$store.state.userRecipes
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.isUserLoggedIn
    },
    userFavourite: function () {
      return this.checkUserFav()
    }
  },
  props: [
    "recipe"
  ],
  methods: {
    ...mapActions(['addRecipeToUser']),
    addThisRecipeToUser: function(e) {
      console.log("add this recipe to user hit in recipecard")
      e.preventDefault()
      this.addRecipeToUser(this.recipe)
      this.userFav = true;
    },
    checkUserFav: function() {
      console.log("checkUserFav ran")
      let currentRecipe = this.recipe.id
      if (this.recipes[currentRecipe] === undefined ) {
        this.userFav = false;
      } else {
        this.userFav = true;
      }
    },
  },
  mounted() {
    this.checkUserFav();
  }
}
</script>

<style scoped src="../../styles/css/RecipeCard.css" lang="css"/>

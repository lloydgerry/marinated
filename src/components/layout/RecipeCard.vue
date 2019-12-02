<template>
  <div class="card-container">
    <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="card-link">

      <img v-bind:src=recipe.image_url  alt="" class="card-media"/>
  
      <!-- <span class="card-number card-circle subtle">{{recipeCard.id}}</span> -->
      <h2 class="card-title">{{recipe.title}} </h2>  
      <div v-if="loggedIn" class="favourite-icon" id="favourite-icon">
        <div v-if="userFav" >
          <img src="../../assets/heart-added.png" > 
        </div>
        <div v-else>
          <img src="../../assets/heart-add.png" v-on:click.prevent="addThisRecipeToUser" >
        </div>
     </div>
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
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.isUserLoggedIn
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
    },
    checkUserFav: function() {
      if (this.state.user.id === 0) {
        this.userLoggedIn = false;
      } else {
        this.userLoggedIn = true;
      }
    }
  },
}
</script>

<style scoped src="../../styles/css/RecipeCard.css" lang="css"/>

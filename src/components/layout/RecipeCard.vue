<template>
  <div class="card-container">
    <Card>
      <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="card u-clearfix">
          <img v-bind:src=recipe.image_url  alt="" class="card-media" />
          <!-- <span class="card-number card-circle subtle">{{recipeCard.id}}</span> -->
          <h2 class="card-title">{{recipe.title}} </h2>
          <span class="card-summary subtle">{{recipe.summary}}</span>
      </router-link>
  <div class="card-shadow"></div>
  </Card>
</div>
</template>

<script>
import Card from "./RecipeCard"

export default {
  components: {
    Card,
  },
  props: [
    "recipe"
  ],
  data () {
    return {
      recipeCard: {
      }
    }
  }
} 
</script>

<style scoped src="../../styles/css/RecipeCard.css" lang="css"/>

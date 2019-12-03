<template>
  <div class="carousel-background"> 
    <div>
      <transition-group class="recipe-carousel centered">
        <div v-for="recipe in RecipeCards" :key="recipe.id" class="recipe-carousel-item">
          <RecipeCard v-bind:recipe="recipe" class="recipe-carousel-item" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard'

  export default {
    name: "RecipeCardCarousel",
    components: {
      RecipeCard
    },
    props : ["RecipeCards"]
  }
</script>

<style scoped src="../../styles/css/RecipeCardsCarousel.css" lang="css"/>

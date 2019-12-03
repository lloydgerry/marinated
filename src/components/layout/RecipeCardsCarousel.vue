<template>
  <div class="carousel-background"> 
    <draggable v-model="recipeCarouselArray">
      <transition-group class="recipe-carousel centered">
        <div v-for="recipe in RecipeCards" :key="recipe.id" class="recipe-carousel-item">
          <RecipeCard v-bind:recipe="recipe" class="recipe-carousel-item" />
        </div>
      </transition-group>
    </draggable>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import RecipeCard from './RecipeCard'

  export default {
    name: "RecipeCardCarousel",
    components: {
      draggable,
      RecipeCard
    },
    props : ["RecipeCards"],
        data () {
            return {
              
                recipeCarouselArray: [
                    {
                      id: 1,
                      title: "card 1",
                      summary: "stuffstuffstuff",
                      img_url: "https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"
                    },
                    {
                      id: 2,
                      title: "is this a title?",
                      summary: "oh man this is a summary",
                      img_url: "https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"
                    },
                    {
                      id: 3,
                      title: "this is another item",
                      summary: "another summary",
                      img_url: "https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"
                    }
                ],
            }
        }
  }
</script>

<style scoped src="../../styles/css/RecipeCardsCarousel.css" lang="css"/>

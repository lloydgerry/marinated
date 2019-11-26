<template>
    <div > 
        <draggable v-model="recipeCarouselArray">
            <transition-group class="recipe-carousel">
                <div v-for="recipe in recipeCarouselArray" :key="recipe.id" class="recipe-carousel-item">
                    {{recipe.title}}
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

  export default {
        components: {
            draggable,
        },
        data () {
            return {
                recipeCarouselArray: [
                    {
                        id: 1,
                        title: "card 1",
                        summary: "stuffstuffstuff"
                    },
                    {
                        id: 2,
                        title: "is this a title?",
                        summary: "oh man this is a summary"
                    },
                    {
                        id: 3,
                        title: "this is another item",
                        summary: "another summary"
                    }
                ],
            }
        }
  }
</script>

<style scoped src="../../styles/css/RecipeCardsCarousel.css" lang="css"/>

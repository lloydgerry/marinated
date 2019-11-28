<template>
  <div>
    <NavBar/>
    <DivSpace/>
      <form>
        <div class ="url-form grid-item" >
          <h2>Copy and paste a URL from one of our partner websites to auto-fill this form:</h2>
          <input type="url" v-model="scrapeUrl" />
          <input type="submit" value="Submit URL Scrape" v-on:click="submitScraper" class="btn" >
        </div>
      </form>
      <form>
        <div class="new-recipe-title grid-item">
          <h2>Title</h2>
          <input type="text" v-model="recipe.title" placeholder="Your Title"/>
        </div>
        <div class="grid-item">
          <h2>Summary</h2>
          <input type="text" v-model="recipe.summary" />
        </div>
        <div class="grid-item">
          <h2>Author</h2>
          <input type="text" v-model="recipe.author" />
        </div>
         <div class="grid-item"> 
          <h2>Image Link</h2>
          <input type="text" v-model="recipe.image_url" />
        </div>
        <div class="grid-item" >
          <h2>Source URL</h2>
          <input type="text" v-model="recipe.source_url" placeholder="https://" />
        </div>
        <div class="grid-item">
          <h2>Prep Time</h2>
          <input type="text" v-model="recipe.prep_time" />
        </div>
        <div class="grid-item">
          <h2>Servings</h2>
          <input type="text" v-model="recipe.servings" />
        </div>
        <div class="grid-item">
          <h2>Ingredients</h2>
          <IngredientsList v-bind:ingredients="recipe.ingredients" v-on:new-ingredient="addIngredient"/>
        </div>
        <div class="preparation grid-item">
          <h2>Preparation</h2>
          <IngredientsList v-bind:ingredients="recipe.preparation" v-on:new-ingredient="addIngredient"/>
        </div>
        <div>
          <input type="submit" class="btn" value="Create New Recipe" v-on:click="submitForm" />
        </div>
      </form>
    </div>
</template>

<script>
import IngredientsList from '../components/layout/IngredientsList'
import NavBar from '../components/layout/NavBar.vue'
import DivSpace from '../components/layout/DivSpace.vue'
import axios from 'axios'

export default {
  state: {
    // recipe: {},
    loading: false
  },
  components: {
    NavBar,
    IngredientsList,
    DivSpace
  },
  data() {
    return{
      scrapeUrl: '',
      recipe: {
        summary: '',
        title: '',
        image_url: '',
        author: '',
        sourceUrl: '',
        prepTime: '',
        servings: '',
        ingredients: [],
        preparation: ''
      }
    }
  },
  methods: {
    submitScraper: function() {
      axios.post('/api/scraper', {url: this.scrapeUrl})
        .then(fetchedrecipe => {
          console.log("fetched recipe data: ", fetchedrecipe)
          this.recipe = fetchedrecipe.data
        })
        .catch(error => console.log("error in submitScraper in NewRecipe: ", error))
    },
    submitForm: function() {
      // const newRecipeObject = {
      //   title: this.title,
      //   image_url: this.imageUrl, 
      //   summary: this.summary,
      //   ingredients: this.ingredients,
      //   preparation: this.preparation,
      //   author: this.author,
      //   source_url: this.sourceUrl,
      //   prep_time: this.prepTime,
      //   servings: this.servings
      // }
      // console.log("form details:", newRecipeObject)
      axios.post('api/recipes-new', { recipe: this.recipe})
        .then(res => {
          console.log('recipe entered, go home to check it out.', res);
        })
        .catch(error => console.log('error in post request', error));
        
    },
    addIngredient: function(name) {
      this.recipe.ingredients.push(name);
    }
  }
}

</script>

<style scoped src="../styles/css/newRecipe.css" lang="css"/>


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
          <input type="text" v-model="title" placeholder="Your Title"/>
        </div>
        <div class="grid-item">
          <h2>Summary</h2>
          <input type="text" v-model="summary" />
        </div>
        <div class="grid-item"> 
          <h2>Image Link</h2>
          <input type="text" v-model="imageUrl" />
        </div>
        <div class="grid-item">
          <h2>Author</h2>
          <input type="text" v-model="author" />
        </div>
        <div class="grid-item" >
          <h2>Source URL</h2>
          <input type="text" v-model="sourceUrl" placeholder="https://" />
        </div>
        <div class="grid-item">
          <h2>Prep Time</h2>
          <input type="text" v-model="prepTime" />
        </div>
        <div class="grid-item">
          <h2>Servings</h2>
          <input type="text" v-model="servings" />
        </div>
        <div class="grid-item">
          <h2>Ingredients</h2>
          <IngredientsList/>
        </div>
        <div class="preparation grid-item">
          <h2>Preparation</h2>
          <input type="text" v-model="preparation" />
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
  components: {
    NavBar,
    IngredientsList,
    DivSpace
  },
  data: () => ({
      scrapeUrl: '',
      summary: '',
      title: '',
      imageUrl: '',
      author: '',
      sourceUrl: '',
      prepTime: '',
      servings: '',
      ingredients: '',
      preparation: ''
  }),
  methods: {
    submitScraper: function() {
      console.log("logging scrapeURL in submitScraper: ", this.scrapeUrl);
      axios.post('/api/scraper', {url: this.scrapeUrl})
        .then(response => console.log("response in NewRecipe from scaper", response))
    },
    submitForm: function() {
      const newRecipeObject = {
        title: this.title,
        image_url: this.imageUrl, 
        summary: this.summary,
        ingredients: this.ingredients,
        preperation: this.preparation,
        author: this.author,
        source_url: this.sourceUrl,
        prep_time: this.prepTime,
        servings: this.servings
      }
      console.log("form details:", newRecipeObject);
    }
  }
}

</script>

<style scoped src="../styles/css/newRecipe.css" lang="css"/>


<template>
  <div>
    <NavBar/>
    <DivSpace/>
      <form>
        <div class ="url-form grid-item" >
          <h2>Copy and paste a URL from one of our partner websites to auto-fill this form:</h2>
          <input type="url" v-model="scrapeurl" />
          <input type="submit" value="Submit URL Scrape" v-on:click="submiSCraper" class="btn" >
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
          <input type="text" v-model="imagelink" />
        </div>
        <div class="grid-item">
          <h2>Author</h2>
          <input type="text" v-model="author" />
        </div>
        <div class="grid-item" >
          <h2>Source URL</h2>
          <input type="text" v-model="sourceurl" placeholder="https://" />
        </div>
        <div class="grid-item">
          <h2>Prep Time</h2>
          <input type="text" v-model="preptime" />
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
          <input type="submit" class="btn" value="Create New Recipe" v-on:click="submit" />
        </div>
      </form>
    </div>
</template>

<script>
import IngredientsList from '../components/layout/IngredientsList'
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"


export default {
  components: {
    NavBar,
    IngredientsList,
    DivSpace
  },
  data: () => ({
      scrapeurl: '',
      summary: '',
      title: '',
      imagelink: '',
      author: '',
      sourceurl: '',
      preptime: '',
      servings: '',
      ingredients: '',
      preparation: ''
  }),
  methods: {
    submitScraper: function() {
      console.log(this.scrapeurl);
    },
    submitForm: function() {
      console.log("form details:", this.scrapeurl, this.summary, this.title, this.imagelink, this.author, this.sourceurl, this.preptime, this.servings, this.ingredients, this.preparation);
    }
  }
}

</script>

<style scoped src="../styles/css/newRecipe.css" lang="css"/>


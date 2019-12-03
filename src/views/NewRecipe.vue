<template>
  <div>
    <NavBar/>
    <DivSpace/>
    <div class="container-contact100" style="background-image: url('images/bg-01.jpg');">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form " @submit="submitScraper">
          <div>
            <h2>Copy and paste a URL from one of our partner websites to auto-fill this form:</h2>
            <input class="input100 submit-scrape" type="url" v-model="scrapeUrl" required />
            <span class="loading-message-box submit-scrape" v-if="loading"> {{output}} </span>
            <div id="submit-scrape-btn" >
            <input type="submit" value="Submit URL Scrape" class="btn submit-scrape" >
            </div>
          </div>
        </form>

        <p v-if="errors.length" class="error-message">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key=errors[error]>{{ error }}</li>
        </ul>
        </p>

        <form class="contact100-form validate-form" @submit="submitForm">
 
          <div class="new-recipe-title grid-item wrap-input100 rs1-wrap-input100 validate-input" data-validate="Title is required" >
            Title <input class="input100" required type="text" name="title-box" v-model="recipe.title" placeholder="Your Title" minlength="3" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Summary <textarea class="input100 large-field" type="textarea" v-model="recipe.summary" />
          </div>
        
          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Author <input class="input100 small-field" type="text" v-model="recipe.author" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100"> 
            Image Link <input class="input100" type="text" v-model="recipe.image_url" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100" >
            Source URL <input class="input100" type="text" v-model="recipe.source_url" placeholder="https://" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Prep Time <input class="input100 small-field" type="text" v-model="recipe.prep_time" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Servings <input class="input100 small-field" type="text" v-model="recipe.servings" />
          </div>

          <div class="ingredients grid-item wrap-input100 rs1-wrap-input100">
            Ingredients 
            <IngredientsList class="input100 large-field" v-bind:ingredients="recipe.ingredients" />
            <form v-if=" this.seenIngredientName">
              <input class="input100 small-field" type="text" v-model="ingredientName"  v-on:keyup.enter.prevent="addIngredient" placeholder="Type your item here" > 
              <button class="btn" v-on:click.prevent="addIngredient" value="Add Item"> Add item </button>
              </form>
              <p><button class="btn" v-on:click="seenIngredientName = !seenIngredientName"> New item </button></p>
          </div>

          <div class="preparation grid-item wrap-input100 rs1-wrap-input100">
            Preparation <IngredientsList class="input100 large-field" v-bind:ingredients="recipe.preparation" />
              <form v-if="seenPreparationName">
              <input class="input100 small-field" type="text" v-model="preparationName"  v-on:keyup.enter.prevent="addPreparation" placeholder="Type your item here" > 
              <button class="btn" v-on:click.prevent="addPreparation" value="Add item"> Add item </button>
              </form>
              <p><button class="btn" v-on:click="seenPreparationName = !seenPreparationName"> New item </button></p>
          </div>

          <div class="tags grid-item wrap-input100 rs1-wrap-input100">
            Tags <input class="input100" type="text" v-model="recipe.tags" />
          </div>

          <div id="submit-form-btn">
            <input type="submit" v-on:click.prevent="submitForm" class="btn submit-recipe" value="Create New Recipe" />
          </div>
      </form>
      <p v-if="errors.length" class="error-message">
        <b>Please correct the following error(s):</b>
        <ul>
          <li class="error-messages" v-for="error in errors" v-bind:key=errors[error]>{{ error }}</li>
        </ul>
        </p>
    </div>
    </div>
	</div>
</template>

<script>
import router from  '../router'
import IngredientsList from '../components/layout/IngredientsList'
import NavBar from '../components/layout/NavBar.vue'
import DivSpace from '../components/layout/DivSpace.vue'
import axios from 'axios'

export default {
  state: {
    // recipe: {},
  },
  components: {
    NavBar,
    IngredientsList,
    DivSpace
  },
  data() {
    return{
      errors: [],
      output: '',
      loading: false,
      ingredientName: '',
      preparationName: '',
      seenIngredientName: false,
      seenPreparationName: false,
      scrapeUrl: '',
      recipe: {
        summary: '',
        title: null,
        image_url: '',
        author: '',
        sourceUrl: '',
        prepTime: '',
        servings: '',
        ingredients: [],
        preparation: [],
        tags: ''
      }
    }
  },
  methods: {
    submitScraper: function(e) {
      e.preventDefault();
      this.loading = true;
      this.output = "We are loading your recipe..."
      axios.post('/api/scraper', {url: this.scrapeUrl})
        .then(fetchedrecipe => {
          if (fetchedrecipe.data === "") {
            this.output = "We're sorry, our gnomes got lost trying to find that recipe. Please try again."
            console.log("scraper likely timed out")
            setTimeout(() => this.loading = false, 10000)
          } //else if (fetchedrecipe !== undefined) {
          //   const recipeId = fetchedrecipe.data.rows[0].id
          //   router.push({ name: 'recipe', params: { id: recipeId} })
          // } 
          else {
            console.log("fetched recipe data: ", fetchedrecipe)
            this.recipe = fetchedrecipe.data
            this.output = "Recipe loaded!"
            setTimeout(() => this.loading = false, 10000)
          }
        })
        .catch(error => console.log("error in submitScraper in NewRecipe: ", error))
    },
    submitForm: function(e) {
      e.preventDefault();
      this.errors = [];
       if (!this.recipe.title) {
        this.errors.push('Title is required.');
      }
      if (this.recipe.preparation.length === 0) {
        this.errors.push('Please fill out preparation.');
      }
      if (this.recipe.title && (this.recipe.preparation.length > 0)) {
     
      axios.post('api/recipes-new', { recipe: this.recipe })
        .then(res => {
          console.log('recipe entered, go home to check it out.', res);
          const recipeId = res.data.rows[0].id
          router.push({ name: 'recipe', params: { id: recipeId} }
 )
        })
        .catch(error => console.log('error in post request', error));
      }
    },
    addIngredient: function(e, ingredientName) {
      e.preventDefault();
      ingredientName = this.ingredientName
      this.recipe.ingredients.push(ingredientName);
      console.log("this.recipe.ing", this.recipe.ingredients)
      console.log("ingredient name", ingredientName)

       this.seenIngredientName = false;
    },
    addPreparation: function(e, preparationName) {
      e.preventDefault();
      preparationName = this.preparationName;
      this.recipe.preparation.push(preparationName)
      this.seenPreparationName = false;
    }
  }
}

</script>

<style scoped src="../styles/css/newRecipe.css" lang="css"/>


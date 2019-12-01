<template>
  <div>
    <NavBar/>
    <DivSpace/>
    <div class="container-contact100" style="background-image: url('images/bg-01.jpg');">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form">
          <div>
            <h2>Copy and paste a URL from one of our partner websites to auto-fill this form:</h2>
            <input class="input100" type="url" v-model="scrapeUrl" />
            <input type="submit" value="Submit URL Scrape" v-on:click="submitScraper" class="btn" >
          </div>
        </form>

        <form class="contact100-form validate-form">
 
          <div class="new-recipe-title grid-item wrap-input100 rs1-wrap-input100 validate-input" data-validate="Title is required">
            Title <input class="input100" type="text" name="title-box" v-model="recipe.title" placeholder="Your Title" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Summary <input class="input100" type="text" v-model="recipe.summary" />
          </div>
        
          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Author <input class="input100" type="text" v-model="recipe.author" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100"> 
            Image Link <input class="input100" type="text" v-model="recipe.image_url" />
          </div>

          <div class="grid-item" >
            Source URL <input class="input100" type="text" v-model="recipe.source_url" placeholder="https://" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Prep Time <input class="input100" type="text" v-model="recipe.prep_time" />
          </div>

          <div class="grid-item wrap-input100 rs1-wrap-input100">
            Servings <input class="input100" type="text" v-model="recipe.servings" />
          </div>

          <div class="ingredients grid-item wrap-input100 rs1-wrap-input100">
            Ingredients <IngredientsList class="input100" v-bind:ingredients="recipe.ingredients" v-on:new-ingredient="addIngredient"/>
          </div>

          <div class="preparation grid-item wrap-input100 rs1-wrap-input100">
            Preparation <IngredientsList class="input100" v-bind:ingredients="recipe.preparation" v-on:new-ingredient="addIngredient"/>
          </div>

          <div class="tags grid-item wrap-input100 rs1-wrap-input100">
            Tags <input class="input100" type="text" v-model="recipe.tags" />
          </div>

          <div>
            <input type="submit" class="btn submit-recipe" value="Create New Recipe" v-on:click="submitForm" />
          </div>

      </form>

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
        preparation: '',
        tags: ''
      }
    }
  },
  methods: {
    submitScraper: function(e) {
      e.preventDefault();
      axios.post('/api/scraper', {url: this.scrapeUrl})
        .then(fetchedrecipe => {
          console.log("fetched recipe data: ", fetchedrecipe)
          this.recipe = fetchedrecipe.data
        })
        .catch(error => console.log("error in submitScraper in NewRecipe: ", error))
    },
    submitForm: function(e) {
      e.preventDefault();
      axios.post('api/recipes-new', { recipe: this.recipe })
        .then(res => {
          console.log('recipe entered, go home to check it out.', res);
          const recipeId = res.data.rows[0].id
          router.push({ name: 'recipe', params: { id: recipeId} }
 )
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


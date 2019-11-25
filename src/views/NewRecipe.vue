<template>
  <div>
        <NavBar/>
      <div>
        <h2>Enter a URL</h2>
        <input type="text" v-model="scrapeurl" />
        <input type="submit" value="Submit URL Scrape" v-on:click="submit" class="btn" />
      </div>
      <div class="new-recipe-title">
        <h2>Title</h2>
        <input type="text" v-model="title" placeholder="Your Title"/>
      </div>
      <div>
        <h2>Image Link</h2>
        <input type="text" v-model="imagelink" />
      </div>
       <div>
        <h2>Author</h2>
        <input type="text" v-model="author" />
      </div>
       <div>
        <h2>Source URL</h2>
        <input type="text" v-model="sourceurl" placeholder="https://" />
      </div>
       <div>
        <h2>Prep Time</h2>
        <input type="text" v-model="preptime" />
      </div>
       <div>
        <h2>Servings</h2>
        <input type="text" v-model="servings" />
      </div>
      <div>
        <h2>Ingredients</h2>
        <input type="text" v-model="servings" />
        <IngredientsList/>
      </div>
      <div>
        <h2>Preparation</h2>
        <input type="text" v-model="preparation" />
      </div>
      <div>
        <input type="submit" class="btn" value="Create New Recipe" v-on:click="submit" />
      </div>
    </div>
</template>

<script>
import IngredientsList from '../components/layout/IngredientsList'
import NavBar from "../components/layout/NavBar.vue"



export default {
  components: {
    NavBar,
    IngredientsList,
  },
  data: () => ({
      scrapeurl: '',
      title: '',
      imagelink: '',
      author: '',
      sourceurl: '',
      preptime: '',
      servings: '',
      ingredients: '',
      preparation: '',
  }),
  methods: {
    submit: function() {
      console.log(this.scrapeurl, this.title, this.imagelink);

      this.scrapeurl = '';
      this.title = '';
    }
  }
}

</script>

<style scoped src="../styles/css/newRecipe.css" lang="css"/>


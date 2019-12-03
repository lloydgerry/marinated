<template>
  <div>
    <NavBar />
    <DivSpace/>
    <div class="page-colour">
    <h2> Search Recipes </h2>
    <div class="search-container">
    <input
      type="text"
      class="search-box"
      id="search-box"
      label="Search"
      margin="normal"
      v-model="search_query"
      v-on:keyup.enter="handleSearch" 
    />
    <input type="submit" class="btn-round" value="Search" v-on:click="handleSearch" />
    </div>
    <h2 v-if="searchError" class="search-error-msg"> We're sorry, but there was no recipes with that search.  Maybe try Foodie? </h2>
    <RecipeCardsCarousel class="search-display" v-bind:RecipeCards="RecipeCards"/>
    </div>
  </div>
 
</template>

<script>
const axios = require('axios');
import NavBar from "../components/layout/NavBar.vue";
import DivSpace from "../components/layout/DivSpace.vue";
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel";

export default {
  components: {
    NavBar,
    DivSpace,
    RecipeCardsCarousel
  },
  data() {
    return {
    search_query: '',
    searchError: false,
    RecipeCards: []

    }
  },
  methods: {
    handleSearch:  function(event) {
      event.preventDefault();
      this.searchError = false;
      console.log("search query in handle search before axios: ", this.search_query)
      axios.post('api/searchRecipes', {search_query: this.search_query})
        .then(res => {
          if (res.data.rows.length === 0) {
            console.log("There was no data with that search term")
            this.searchError = true
          } else {
            console.log("res in handleSearch: ", res.data.rows)
            this.RecipeCards = res.data.rows
          }
        })
        .catch(error => console.log("error in handleSearch: ", error))
    }
  }
}
</script>

<style scoped src="../styles/css/Search.css" lang="css"/>
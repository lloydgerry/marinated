<template>
  <div>
    <NavBar />
    <DivSpace/>
    <h2> Form </h2>
    <input
      id="search"
      label="Search"
      margin="normal"
      v-model="search_query"
    />
    <button type="submit" class="btn" value="SubmitSearch" v-on:click="handleSearch" />
    <span v-if="searchError"> We're sorry, but there was no recipes with that search.  Maybe try Foodie? </span>
    <RecipeCardsCarousel v-bind:RecipeCards="RecipeCards"/>
    {{RecipeCards}}
  </div>

</template>

<script>
const axios = require('axios');
import NavBar from "./NavBar.vue";
import DivSpace from "./DivSpace.vue";
import RecipeCardsCarousel from "./RecipeCardsCarousel";




// const Fuse = require('fuse.js')

// var options = {
//   shouldSort: true,
//   findAllMatches: true,
//   threshold: 0.6,
//   location: 0,
//   distance: 100,
//   maxPatternLength: 32,
//   minMatchCharLength: 1,
//   keys: [
//     "title",
//     "author.firstName"
//   ]
// };
// var fuse = new Fuse(list, options); // "list" is the item array
// var result = fuse.search(""); 

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
      // this.searchError = false;
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

<style>

</style>
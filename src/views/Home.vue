<template>
  <div class="home">
    <NavBar/>
    <DivSpace/>
    <div v-if="mealCardIsOpen">
      <PlanDrawer />
    </div>  
    <RecipeCardsCarousel v-bind:RecipeCards="RecipeCards"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"
import PlanDrawer from "../components/PlanDrawer"
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel"
// const axios = require('axios')

import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    NavBar,
    PlanDrawer,
    RecipeCardsCarousel,
    DivSpace
  },
  data() {
    return {
      mealCardIsOpen: false,
      RecipeCards: []

    }


  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(['fetchData']),
    mealCardClose() {
      this.mealCardIsOpen = false
    },
    mealCardOpen() {
      this.mealCardIsOpen = true
    },
    // fetchData() {
    //   axios.get('/api/recipes')
    //     .then(res => {
    //       this.RecipeCards = res.data;
    //       console.log("vue returning the recipe data: ", res.data);
    //     })
    //     .catch(error => console.log("error from fetch data", error));
    // }
  }
}
</script>

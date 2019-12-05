<template>
  <div class="recipe-page">
    <NavBar/>
    <DivSpace/>
    <div class="recipe-display"> 
      <div class="grid-container">
        <div class="grid-item">
          <h1>{{recipe.title}}</h1>
          <p>Author: {{ recipe.author }}</p>
          <p>Time: {{ recipe.prep_time }}</p>
          <p>Servings: {{ recipe.servings }}</p>
        </div>
        <div class="grid-item" id="ingredients">
          <div 
            class="ingredient"
            v-for="ingredient in recipe.ingredients" 
            :key="ingredient.index"
          >
            {{ ingredient }}
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-if="recipe.image_url !== '' && recipe.image_url !== 'undefined'">
          <img :src="recipe.image_url">
        </div>
        <div>
          <div class="summary">
            {{recipe.summary}}
          </div>
          <div 
            class="prep"
            v-for="preparation in recipe.preparation" 
            :key="preparation.index"
          >
            - {{ preparation }}
          </div>
        </div>
      </div>
    </div>
    <div class="save-button" v-if="loggedIn">
      <a @click="changeSaveState">{{saveButtonMessage}}</a> 
    </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue";
import DivSpace from "../components/layout/DivSpace.vue";
import store from "../store/index";
import axios from 'axios';


export default {
  name: 'Recipe',
  components: {
    NavBar,
    DivSpace
  },
  props: [ 'id'],
  data() {
    return {
      recipe: {},
      saveButtonMessage: '',
      userHasSaved: false
    }
  },
  created() {
    this.fetchData();
    // this.checkSave();
  },
  computed: {
    loggedIn () {
      return this.$store.state.isUserLoggedIn
    },
    isSaved: function() {
      return this.$store.state.userRecipes.findIndex(r => r.id === this.id)
    }
  },
  methods: {
    fetchData() {
      axios.get(`api/recipes/${this.id}`)
        .then(res => this.recipe = res.data[0])
        .catch(error => console.log("error from fetch data", error));
    },
    checkSave() {
      console.log(this.isSaved);
      
      if (this.isSaved < 0){
        console.log('save is becoming < 0');
        this.saveButtonMessage = "Save Recipe For Later";
      } else {
        console.log('save is becoming >= 0');
        this.saveButtonMessage = "Remove From Saved List";
      }
    },
    changeSaveState() {
      if (this.isSaved < 0) {
        
        
        store.dispatch('addRecipeToUser', {recipeId: this.id})
          .then(this.checkSave())
      } else {
        console.log('this.id is equal to: ', this.id);
        store.dispatch('removeRecipeFromUser',  this.id)
          .then(this.checkSave())
      }
      // this.checkSave();

    }
  },
  mounted() {
    this.checkSave();
  }

}
</script>

<style scoped src="../styles/css/recipePage.css" lang="css"/>
import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
<<<<<<< HEAD
    userId: 1
=======
    recipes: []
>>>>>>> master
  },
  mutations: {
    setRecipes(state, newRecipes) {
      state.recipes = newRecipes;
    }
  },
  getters: {
    getRecipes: state => {return state.recipes}
  },
  actions: {
<<<<<<< HEAD
    // get user's meal plans
    // get users's favourites
    // get all recipes
=======
    fetchAllRecipesData({commit}) {
      axios.get('/api/recipes')
        .then(res => {
          commit('setRecipes',  res.data) ;
          console.log("store state recipes: ", this.state.recipes)
        })
        .catch(error => console.log("error from fetch data in store", error));
    }
>>>>>>> master
  },
  modules: {
  },
})

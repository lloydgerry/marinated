import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: []
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
    fetchAllRecipesData({commit}) {
      axios.get('/api/recipes')
        .then(res => {
          commit('setRecipes',  res.data) ;
          console.log("store state recipes: ", this.state.recipes)
        })
        .catch(error => console.log("error from fetch data in store", error));
    }
  },
  modules: {
  },
})

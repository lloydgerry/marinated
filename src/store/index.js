import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: 0,
    recipes: []
  },
  mutations: {
    setRecipes(state, newRecipes) {
      state.recipes = newRecipes;
    },
    login: (state, id) => state.userId = id,
    logout: (state, id) => state.userId = id
  },
  getters: {
    getRecipes: state => {return state.recipes}
  },
  actions: {
    loginUser({ commit }) {
      commit('login', 1);
    },
    logoutUser({ commit }) {
      commit('logout', 0);
    },
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

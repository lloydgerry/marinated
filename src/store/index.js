import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    user: {id: 0, email: '', name: ''},
    recipes: [],
    userRecipes: [],
    isUserLoggedIn: false,
  },
  mutations: {
    setRecipes(state, newRecipes) {
      state.recipes = newRecipes;
    },
    login: (state, user) => {
      state.user = user;
      state.isUserLoggedIn = true;
    },
    logout: (state, user) => {
      state.user = user;
      state.isUserLoggedIn = false;
    },
    setUserRecipes: (state, userRecipes) => state.userRecipes = userRecipes,
    addUserRecipe: (state, recipeId) => state.userRecipes.push(recipeId)
  },
  getters: {
    getRecipes: state => {return state.recipes},
    isLogged: state => state.isUserLoggedIn ? true : false
  },
  actions: {
    loginUser({ commit }) {
      axios.post('/api/login', {email: 'hermione@test.com'})
        .then(res => {
          commit('login', res.data);
          console.log('ding in loginUser', res.data);
          
          axios.get(`api/user/${res.data.id}/recipes`)
            .then(response => {
              console.log('data return from get user recipes', response.data)
              commit('setUserRecipes', response.data)
            });
        })
        .catch(error => console.log("error from login in store", error));
    },
    logoutUser({ commit }) {
      axios.post('/api/logout', {email: 'hermione@test.com'})
        .then(res => commit('logout', res))
        .catch(error => console.log("error from logout in store", error));
    },
    fetchAllRecipesData({commit}) {
      axios.get('/api/recipes')
        .then(res => {
          commit('setRecipes',  res.data) ;
          // console.log("store state recipes: ", this.state.recipes)
        })
        .catch(error => console.log("error from fetch data in store", error));
    },
    addRecipeToUser({ commit }, recipe) {
      axios.put(`/api/user/${this.state.user.id}/recipes`, {recipeId: recipe.id})
        .then(() => {
          console.log('done addRecipeToUser, recipe', recipe)
          console.log('state of userRecipes', this.state.userRecipes)
          commit('addUserRecipe', recipe)
        })
        .catch(error => console.log("error in addRecipeToUser in store", error))
    }
  },
  modules: {
  },
})

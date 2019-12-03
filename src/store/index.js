import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    user: {id: 0, email: '', name: ''},
    recipes: [],
    userRecipes: [],
    userMealPlans: [],
    isUserLoggedIn: false,
    token: localStorage.getItem('user-token') || ''
  },
  mutations: {
    setRecipes:(state, newRecipes) => state.recipes = newRecipes,
    login: (state, user) => {
      state.user = user;
      state.isUserLoggedIn = true;
    },
    logout: (state, user) => {
      state.user = user;
      state.isUserLoggedIn = false;
    },
    setUserRecipes: (state, userRecipes) => state.userRecipes = userRecipes,
    addUserRecipe: (state, recipeId) => state.userRecipes.push(recipeId),
    setUserMealPlans: (state, userPlans) => state.userMealPlans = userPlans,
    AUTH_SUCCESS: (state, token) => state.token = token,
    AUTH_LOGOUT: (state) => state.token = ''
  },
  getters: {
    getRecipes: state => {return state.recipes},
    isLogged: state => state.isUserLoggedIn ? true : false,
    isAuthenticated: state => !!state.token,
  },
  actions: {
    loginUser({ commit }) {
      axios.post('/api/login', {email: 'hermione@test.com'})
        .then(res => {
          console.log(res.data);
          
          commit('login', res.data);  
          const token = res.data.token
          localStorage.setItem('user-token', token) // store the token in localstorage
          commit('AUTH_SUCCESS', token)          
          return axios.get(`api/user/${res.data.id}/recipes`)
            .then(response => {
              commit('setUserRecipes', response.data);
              return res.data.id
            });
        })
        .then(response => {
          axios.get(`api/user/${response}/mealplans`)
            .then(res => commit('setUserMealPlans', res.data))
        })
        .catch(error => console.log("error from login in store", error));
    },
    logoutUser({ commit }) {
      axios.post('/api/logout', {email: 'hermione@test.com'})
        .then(res => {
          commit('logout', res)
          commit('AUTH_LOGOUT')
          localStorage.removeItem('user-token')
        })
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

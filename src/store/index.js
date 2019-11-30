import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios')

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: {id: 0, email: '', name: ''},
    recipes: []
  },
  mutations: {
    setRecipes(state, newRecipes) {
      state.recipes = newRecipes;
    },
    login: (state, user) => state.user = user,
    logout: (state, user) => state.user = user
  },
  getters: {
    getRecipes: state => {return state.recipes},
    isLogged: state => state.user.id ? true : false
  },
  actions: {
    loginUser({ commit }) {
      axios.post('/api/login', {email: 'hermione@test.com'})
        .then(res => commit('login', res.data))
        .catch(error => console.log("error from login in store", error));
    },
    logoutUser({ commit }) {
      axios.get('/api/logoout', {email: 'hermione@test.com'})
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
    }
  },
  modules: {
  },
})

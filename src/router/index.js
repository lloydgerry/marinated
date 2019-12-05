import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/mealplan',
    name: 'mealplan',
    component: () => import('../views/MealPlan.vue'),
    beforeEnter(to, from, next) {
      if (store.getters["isLogged"]) {
        next()
      } else {
        next({
          name: "home", // back to safety route //
          query: { redirectFrom: to.fullPath }
        });
      }
    }
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    props: true,
    component: () => import('../views/Recipe.vue')
  },
  {
    path: '/savedforlater',
    name: 'savedforlater',
    component: () => import('../views/SavedForLater.vue'),
    beforeEnter(to, from, next) {
      if (store.getters["isLogged"]) {
        next()
      } else {
        next({
          name: "home", // back to safety route //
          query: { redirectFrom: to.fullPath }
        });
      }
    }
  },
  {
    path: '/new-recipe',
    name: 'new-recipe',
    component: () => import('../views/NewRecipe.vue')
  },
  {
    path: '/foodie-chat',
    name: 'FoodieChat',
    component: () => import('../views/FoodieChat.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter(to, from, next) {
      store.dispatch('logoutUser');
      next({name: "home"});
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

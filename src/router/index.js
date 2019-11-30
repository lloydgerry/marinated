import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter)

// import { mapState } from 'vuex';

// const state = {...mapState}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  {
    path: '/mealplan',
    name: 'mealplan',
    component: () => import('../views/MealPlan.vue')
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
    component: () => import('../views/SavedForLater.vue')
  },
  {
    path: '/new-recipe',
    name: 'new-recipe',
    component: () => import('../views/NewRecipe.vue'),
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
    redirect: '/',
    beforeEnter(to, from, next) {
      store.actions["logout"];
      next();
    }
  }

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mealplan',
    name: 'mealplan',
    component: () => import(/* webpackChunkName: "mealplan" */ '../views/MealPlan.vue')
  },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import(/* webpackChunkName: "recipe" */ '../views/Recipe.vue')
    },
  {
    path: '/savedforlater',
    name: 'savedforlater',
    component: () => import(/* webpackChunkName: "savedforlater" */ '../views/SavedForLater.vue')
  },
  {
    path: '/new-recipe',
    name: 'new-recipe',
    component: () => import(/* webpackChunkName: "new-recipe" */ '../views/NewRecipe.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

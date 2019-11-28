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
    component: () => import('../views/NewRecipe.vue')
  },
  {
    path: '/FoodieChat',
    name: 'FoodieChat',
    component: () => import('../views/FoodieChat.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

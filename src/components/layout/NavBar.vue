<template>
  <div class="nav-bar">
    <router-link to="/" title="Marinated"><h1>Marinated</h1></router-link> 
    <ul id="navigation">
      <li v-if="this.$store.state.userId < 1">
        <template>
          <a @click="login" :title="navList[0].name">
            {{ navList[0].name }}
          </a>
        </template>
      </li>
      <li v-else>
        <template class="menu">
          <a 
            :title="navList[1].name" 
            @click="isOpen = !isOpen, active = !active" 
            :class="{ active }"
          >
              {{ navList[1].name }}  ▾
          </a>
          <div :class="{ isOpen }" class="dropdown">
            <ul>
              <li v-for="{ url, name, index } in navList[1].children" :key="index">
                <router-link class="nav-link" :to="url" :title="name">
                  {{ name }}
                </router-link>
              </li>
            </ul>
          </div>
        </template>
      <li>
        <template>
          <a :href="navList[2].url" :title="navList[2].name">
            {{ navList[2].name }}
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'NavBar',
  state: {...mapState},
  // props: ["item"],
  data() {
    return {
      isOpen: false,
      active: false,
      navList: [
        { url: '/', name: 'Login'},
        { url: "#",
          name: "UserName",
          children: [
            {
              url: "/new-recipe",
              name: "Add New Recipe"
            },
            {
              url: "/foodie-chat",
              name: "FoodieChat"
            },
            {
              url: "/mealplan",
              name: "Meal Plan"
            },
            {
              url: "user-saved",
              name: "View Saved"
            },
            {
              url: "/logout",
              name: "Logout"
            }
          ]
        },
        { url: "/search", name: "Search" }
      ]
    }
  },
  methods: {
    ...mapActions(['loginUser', 'logoutUser']),
    login(e) {
      e.preventDefault();
      this.loginUser();
    },
    logout(e) {
      e.preventDefault();
      this.logoutUser();
    },
  }
}
</script>

<style scoped src="../../styles/css/NavBar.css" lang="css"/>
<template>
  <div class="nav-bar">
    <router-link to="/" title="Marinated"><h1>Marinated</h1></router-link> 
    <ul id="navigation">
      <li v-for="item in navList" :key="item.index">
        <template v-if="item.children" class="menu">
          <a 
            :title="item.name" 
            @click="isOpen = !isOpen, active = !active" 
            :class="{ active }"
          >
              {{ item.name }}  ▾
          </a>
          <div :class="{ isOpen }" class="dropdown">
            <ul>
              <li v-for="{ url, name, index } in item.children" :key="index">
                <router-link class="nav-link" :to="url" :title="name">
                  {{ name }}
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <a :href="item.url" :title="item.name">
            {{ item.name }}
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  name: 'NavBar',
  props: ["item"],
  data() {
    return {
      isOpen: false,
      active: false,
      navList: [
        {
          url: "#",
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
  }
}
</script>

<style scoped src="../../styles/css/NavBar.css" lang="css"/>
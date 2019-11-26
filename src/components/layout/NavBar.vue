<template>
  <div class="nav-bar">
    <router-link to="/"><h1>Marinated</h1></router-link> 
    <ul id="navigation">
      <li v-for="item in navList" :key="item.id">
        <template v-if="item.children">
          <a 
            :href="item.url" 
            :title="item.name" 
            @click="isOpen = !isOpen, active = !active" 
            :class="{ active }">
              {{ item.name }}  ▾
          </a>
          <div :class="{ isOpen }" class="dropdown">
            <ul>
              <li v-for="{ url, name, index, target } in item.children" :key="index">
                <router-link class="nav-link" :to="url" :title="name" :target="target">{{ name }}</router-link>
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
          id: 1,
          children: [
            {
              url: "/new-recipe",
              name: "Add New Recipe",
              target: "_blank"
            },
            {
              url: "/mealplan",
              name: "Meal Plan",
              target: "_blank"
            },
            {
              url: "user-saved",
              name: "View Saved",
              target: "_blank"
            },
            {
              url: "/logout",
              name: "Logout",
              target: "_blank"
            }
          ]
        },
        { url: "#", name: "Search", id: 2}
      ]
    }
  }
}
</script>

<style scoped src="../../styles/css/nav.css" lang="css"/>
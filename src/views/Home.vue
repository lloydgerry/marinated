<template>
  <div class="home">
  <NavBar/>
  <PlanDrawer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/layout/NavBar.vue"
import PlanDrawer from "../components/PlanDrawer"

export default {
  name: 'home',
  components: {
    NavBar,
    PlanDrawer
  }
}
</script>

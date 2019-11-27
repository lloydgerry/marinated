<template>
  <div>
  <NavBar/>
  <DivSpace/>
  <div class="about">
    <h1>This is the Meal Plan page</h1>
  </div>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"


export default {
  name: 'MealPlan',
  components: {
    NavBar,
    DivSpace
  }
}
</script>
<template>
  <div class="about">
    <NavBar/>
    <DivSpace/>
    <RecipePage/>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"
import RecipePage from "../components/RecipePage"


export default {
  name: 'recipe',
  components: {
    NavBar,
    RecipePage,
    DivSpace
    },
  data() {
  
  },
  computed: {

  }

}
</script>
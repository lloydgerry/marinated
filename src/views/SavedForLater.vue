<template>
    <div>
    <NavBar/>
    <DivSpace />
    <RecipeCardsCarousel />
    <div class="about">
      <h1>This is a user's saved for later page</h1>
    </div>
    </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"
import DivSpace from "../components/layout/DivSpace.vue"
import RecipeCardsCarousel from "../components/layout/RecipeCardsCarousel"

export default {
  name: 'SavedForLater',
  components: {
    NavBar,
    DivSpace,
    RecipeCardsCarousel
  }
}
</script>
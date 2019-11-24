<template>
  <div> 
    Hello there!
    <Recipes/>
  </div>
</template>

<script>
import Recipes from '../views/Recipe'

export default {
  name: "RecipePage",
  components: {
    Recipes
  }
}
</script>

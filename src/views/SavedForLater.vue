<template>
    <div>
    <NavBar/>
    <div class="about">
      <h1>This is a user's saved for later page</h1>
    </div>
    </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue"

export default {
  name: 'SavedForLater',
  components: {
    NavBar
  }
}
</script>
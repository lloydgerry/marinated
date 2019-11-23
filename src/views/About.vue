<template>
  <div>
    <NavBar/>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/layout/NavBar.vue"

export default {
  name: 'About',
  components: {
    NavBar
  }
}
</script>
<template>
  <div id="app">
    <navBar />
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

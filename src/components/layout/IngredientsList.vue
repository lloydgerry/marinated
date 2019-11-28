<template>
  <div>
    <ul class='ingredients-list'>
      <li class='ingredients-list-item' v-for="ingredient in ingredients" v-bind:key="ingredient" >
       - {{ingredient}}
      </li>
      <form v-if="seen" @submit="addIngredient">
      <input type="text" v-model="name"  v-on:keyup.enter="submit" placeholder="Type your ingredient here" > 
      <input type="submit" value="+">
      </form>
      <p><button v-on:click="seen = !seen"> Add Ingredient </button></p>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
  components: {
  },
  data() {
    return {
      ingredientslist: [],
      seen: false,
      name: ''
    };
  },
  methods: {
    addIngredient(e) {
      e.preventDefault();
      console.log("name from addIngredient in InList", this.name)
      this.$emit('new-ingredient', this.name );
      this.name = "";
      this.seen = false;
    }
  },
};
</script>

<style>

</style>
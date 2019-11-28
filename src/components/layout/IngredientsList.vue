<template>
  <div>
    <ul class='ingredients-list'>
      <li class='ingredients-list-item' v-for="ingredient in ingredients" v-bind:key="ingredient" >
       - {{ingredient}}
      </li>
      <form>
      <input type="text" v-model="name" v-if="seen" v-on:keyup.enter="addIngredient(name)" placeholder="Type your ingredient here" > 
      <button v-on:click="onSubmit" type="submit"> + </button>
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
    addIngredient(name) {
      this.$emit('new-ingredient', name );
      this.name = "";
      this.seen = false;
    }
  },
};
</script>

<style>

</style>
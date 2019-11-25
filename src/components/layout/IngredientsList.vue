<template>
  <div>
    <ul class='ingredients-list'>
      <li class='ingredients-list-item' v-for="ingredient in ingredientslist" v-bind:key="ingredient" >
       - {{ingredient}}
      </li>
      <input type="text" v-model="name" v-if="seen" v-on:keyup.enter="addIngredient(name)" placeholder="Type your ingredient here" > 
      <p><button v-on:click="seen = !seen"> Add Ingredient </button></p>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      ingredientslist: [
        "sugar",
        "flour"
      ],
      seen: false,
    };
  },
  methods: {
    addIngredient(name) {
      this.ingredientslist.push(
        name
      );
      this.name = "";
      this.seen = false;
    }
  },
};
</script>

<style>

</style>
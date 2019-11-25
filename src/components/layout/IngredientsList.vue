<template>
  <div>
    <ul class='ingredients-list'>
      <li v-for="ingredient in ingredientslist" v-bind:key="ingredient" >
      {{ingredient}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    // IngredientsList,
  },
  data() {
    return {
      ingredientslist: [
        "sugar",
        "flour"
      ],
    };
  },
};
</script>

<style>

</style>
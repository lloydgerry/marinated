<template>
  <div>
    {{ingredientslist}}
  </div>
</template>

<script>
export default {
  components: {
    // IngredientsList,
  },
  // data function avails data to the template
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
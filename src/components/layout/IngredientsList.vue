<template>
  <div>
    <ul class='ingredients-list'>
      <li class='ingredients-list-item' v-for="ingredient in ingredients" v-bind:key="ingredient" >
       - {{ingredient}}
      </li>
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
    };
  },
  methods: {
  },
};
</script>

<style>

.btn {
  background-color: fff;
  margin-left: 10px;
  border-radius: 34px;
  border: 2px solid #e6e6e6;
}

</style>
<template>
  <div>
  <NavBar/>
  <DivSpace/>
    <div class="simple-page">
        <div class="menu">
          <Container group-name="1" :get-child-payload="getChildPayload2" @drop="onDrop('items2', $event)">
            <Draggable v-for="item in items2" :key="item.id" :orientation="horizontal">
              <div class="draggable-item-horizontal">
                {{item.data}}
              </div>
            </Draggable>
            
          </Container>
        </div>
        <div class="bottom-bar">
        <div class="delete-area">
          <Container group-name="1" :get-child-payload="getChildPayload2" @drop="onDelete('items2', $event)" >
            <Draggable v-for="item in deleteThis" :key="item.id" :orientation="horizontal">
              <div class="draggable-item-horizontal">
                {{item.data}}
              </div>
            </Draggable>
          </Container>
        </div>
        <div >
          <Container behaviour="copy" group-name="1" :get-child-payload="getChildPayload1" class="card-carousel">
            <Draggable v-for="item in items1" :key="item.id">
              <div class="draggable-item-horizontal">
                {{item.data}}
              </div>
            </Draggable>
          </Container>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../components/layout/NavBar.vue";
  import DivSpace from "../components/layout/DivSpace.vue";
  import { Container, Draggable } from "vue-smooth-dnd";
  import { applyDrag, generateItems } from "../utils/helpers";

export default {
  name: 'MealPlan',
  components: { 
    NavBar,
    DivSpace,
    Container, 
    Draggable 
  },
  data() {
    return {
      items1: generateItems(30, i => ({
        id: '1' + i,
        data: `Source Draggable - ${i}`
      })),
      items2: generateItems(21, i => ({
        id: '2' + i,
        data: `Draggable 2 - ${i}`
      })),
      deleteThis: []
    };
  },
  methods: {  
    onDrop (collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
    },
    onDelete(collection, dropResult) {
      this.deleteThis = applyDrag(this[collection], dropResult);
      this.deleteThis = [];
    },
    getChildPayload1 (index) {
      return this.items1[index]
    },
    getChildPayload2 (index) {
      return this.items2[index]
    }
  }
};
</script>

<style scoped src="../styles/css/MealPlan.css" lang="css"/>
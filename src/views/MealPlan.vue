<template>
  <div>
    <NavBar/>
    <DivSpace/>
    <div class="simple-page">

      <div class="menu">
        <Container
          orientation="horizontal"
          @drop="onColumnDrop($event)"
          drag-handle-selector=".column-drag-handle"
          @drag-start="dragStart"
          :drop-placeholder="upperDropPlaceholderOptions"
        >
          <Draggable v-for="column in scene.children" :key="column.id">
            <div :class="column.props.className">
              <div class="card-column-header">

              </div>
              <Container
                group-name="col"
                @drop="(e) => onCardDrop(column.id, e)"
                @drag-start="(e) => log('drag start', e)"
                @drag-end="(e) => log('drag end', e)"
                :get-child-payload="getCardPayload(column.id)"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                :drop-placeholder="dropPlaceholderOptions"
              >
                <Draggable v-for="card in column.children" :key="card.id">
                  <div :class="card.props.className" :style="card.props.style">
                    <p>{{ card.title }}</p>
                  </div>
                </Draggable>
              </Container>
            </div>

          </Draggable>
          
        </Container>


      </div>

      <div class="bottom-bar">
        <div class="delete-area">
          <Container group-name="col" @drop="onDelete('items2', $event)" >
            <Draggable v-for="card in deleteThis" :key="card.id">
              <div class="card.props.className" :style="card.props.style">
                {{card.title}}
              </div>
            </Draggable>
          </Container>
        </div>
        <div >
          <Container 
            behaviour="copy" 
            group-name="col" 
            :get-child-payload="getChildPayload1" 
            class="card-carousel"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
          >
            <Draggable v-for="card in items2" :key="card.id">
              <div class="card.props.className" :style="card.props.style">
                {{card.title}}
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



  const scene = {
    type: 'container',
    props: {
      orientation: 'horizontal'
    },
    children: generateItems(7, i => ({
      id: `column${i+2}`,
      type: 'container',
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children: generateItems(3, j => ({
        type: 'draggable',
        id: `${i}${j+3}`,
        props: {
          className: 'card'
        },
        title: `cardID: ${i}${j+3}`
      }))
    }))
  }

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
      scene,
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      items2: generateItems(21, i => ({
        type: 'draggable',
        id: '9' + i,
        title: `RecipesID: ${i}`,
        props: {className: 'card'}
      })),
      deleteThis: [],
    };
  },
  methods: {  
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
    onCardDrop (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    onDelete(collection, dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex === null && addedIndex === null) return collection;
      // console.log('removedIndex: ',removedIndex, 'addedIndex: ',addedIndex, 'payload: ',payload);
      
      const result = [...collection];
      // result[addedIndex] = payload;

      let itemToAdd = payload;
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      this[collection] = result;
    },
    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    dragStart () {
      
    },
    log () {
      // console.log(...params)
    },
    shouldAnimateDrop: function(sourceContainerOptions, payload) {
      console.log(sourceContainerOptions, payload);
      
      return false;
    },
    shouldAcceptDrop: function(sourceContainerOptions, payload) {
      console.log(sourceContainerOptions, payload);
      
      return false;
    },
    getChildPayload1 (index) {
      return this.items2[index]
    },
  }
};
</script>

<style scoped src="../styles/css/MealPlan.css" lang="css"/>
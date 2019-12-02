<template>
  <div>
    <NavBar/>
    <DivSpace/>
    <div class="simple-page">
      <div class="menu">
        <div id="save-area">
          <span>
            <label for="meal-plan-selector">Select From Saved Plans:</label>
            <select id="meal-plan-selector" name="Plans" @change="changeMealPlan($event)" v-model="key">
              <option>--Please choose an option--</option>
              <option v-for="plan in userPlans" :key="plan.id" :value="plan.id">{{plan.name}}</option>
            </select>
          </span>
          <span>
            <form id="save-form">
              <input type="text" :placeholder="placeholder" class="form-input"/>
              <input type="submit" class="btn"/>
            </form>
          </span>
        </div>
          <Container
            orientation="horizontal"
            @drop="onColumnDrop($event)"
            drag-handle-selector=".column-drag-handle"
            @drag-start="dragStart"
            :drop-placeholder="upperDropPlaceholderOptions"
          >
            <Draggable v-for="column in scene.children" :key="column.id">
              <div :class="column.props.className">
                <div class="card-column-header"></div>
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
                  <Draggable v-for="card in column.children" :key="card.index">
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
          <Container 
            behaviour="copy" 
            group-name="col" 
            :get-child-payload="getChildPayload1" 
            drag-class="card-ghost"
            drop-class="card-ghost-drop" 
          >
          <!-- recipe cards -->
            <Draggable v-for="card in items2" :key="card.id" >
              <div class="card" >
                <div class="recipe-card">
                  <img :src="card.props.recipe.image_url"/>
                  {{card.props.recipe.title}}
                  </div>
              </div>
            </Draggable>
          </Container>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBar from "../components/layout/NavBar.vue";
  import DivSpace from "../components/layout/DivSpace.vue";
  import { Container, Draggable } from "vue-smooth-dnd";
  import { applyDrag, generateItems } from "../utils/helpers";
  import store from "../store/index";
  import axios from 'axios';

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
        id: `${i}${j}`,
        props: {
          className: 'card',
          onTable: true
        },
        title: `Empty ${i}${j}`
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
      recipes: store.state.userRecipes,
      items2: generateItems(store.state.userRecipes.length, i => ({
        type: 'draggable',
        id: '9' + i,
        title: `RecipesID: ${i}`,
        // add recipe to props
        props: {className: 'card' , onTable: false, recipe: store.state.userRecipes[i]}
      }), this.recipes),
      userPlans: store.state.userMealPlans,
      planRecipes: [],
      deleteThis: [],
      placeholder: 'Give Your Plan A Name'
      key: ''
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

        console.log('removedIndex: ', dropResult.removedIndex, 'addedIndex: ', dropResult.addedIndex);
        
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        // newColumn.children = 
        // get column and row id and make swap
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    onDelete(collection, dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex === null && addedIndex === null) return collection;
      const result = [...collection];
      let itemToAdd = payload;
      if (removedIndex !== null) itemToAdd = result.splice(removedIndex, 1)[0]
      if (addedIndex !== null) result.splice(addedIndex, 0, itemToAdd)
      this[collection] = result;
    },
    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    dragStart (){},
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
    fetchMealPlanRecipes( planId ) {
      return axios.get(`/api/mealplan/${planId}`)
        .then(res => {
           this.planRecipes = res.data;
           return res.data;
        })
        .catch(e => console.log('error in fetching recipes: ', e))
    },
    changeMealPlan(event) {
      const id = event.target.value
        this.fetchMealPlanRecipes(id)
          .then(res => {
            this.fillTableWithPlan(res);
            console.log('is array', res)
          })
          .catch(e => console.error(e));
    },
    fillTableWithPlan () {
      let i = 0;
      for (let j = 0; j < 7; j++ ) {
        for (let k = 0; k < 3; k++) {
          this.scene.children[j].children[k].title = this.planRecipes[i].title;
          this.scene.children[j].children[k].props.recipe.id = this.planRecipes[i].title;
          i++;
        }
      }
    }
  }
};
</script>

<style scoped src="../styles/css/MealPlan.css" lang="css"/>
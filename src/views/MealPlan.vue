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
              <option value="0">NEW PLAN</option>
              <option v-for="plan in userPlans" :key="plan.id" :value="plan.id">{{plan.name}}</option>
            </select>
          </span>
          <span>
            <form id="save-form" @submit.prevent="savePlan()">
              <input type="text" placeholder="Give Your Plan A Name" class="form-input" minimumlength=1 required v-model="planName"/>
              <input type="submit" class="btn" value="SAVE"/>
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
                <div class="card-column-header">{{column.name}}</div>
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
                    <div :class="card.props.className">
                      <a @click="card.title=''">✘</a>
                      <p @click="goToRecipe(card.props.recipe.id)">{{ card.title }}</p>
                    </div>
                  </Draggable>
                </Container>
              </div>
            </Draggable>
          </Container>
      </div>

      <div class="bottom-bar">
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
              <div class="recipe-card" @click="goToRecipe(card.props.recipe.id)">
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
  import router from "../router"
  import axios from 'axios';

  const columnNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const scene = {
    type: 'container',
    props: {
      orientation: 'horizontal'
    },
    children: generateItems(7, i => ({
      id: `column${i+2}`,
      type: 'container',
      name: columnNames[i],
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children: generateItems(3, j => ({
        type: 'draggable',
        id: `${i}${j}`,
        props: {
          className: 'card',
          onTable: true,
          recipe: {}
        },
        title: ``
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
        props: {className: 'card' , onTable: false, recipe: store.state.userRecipes[i]}
      }), this.recipes),
      userPlans: store.state.userMealPlans,
      planRecipes: [],
      deleteThis: [],
      planName: '',
      emptyTable: this.createEmptyTable(),
      key: 0
    };
  },
  methods: {  
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene);
      scene.children = applyDrag(scene.children, dropResult);
      this.scene = scene;
    },
    onCardDrop (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene);
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column);
        const newColumn = Object.assign({}, column);
        newColumn.children = applyDrag(newColumn.children, dropResult);
        scene.children.splice(columnIndex, 1, newColumn);
        this.scene = scene;
      }
    },
    onDelete(collection, dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex === null && addedIndex === null) return collection;
      const result = [...collection];
      let itemToAdd = payload;
      if (removedIndex !== null) itemToAdd = result.splice(removedIndex, 1)[0];
      if (addedIndex !== null) result.splice(addedIndex, 0, itemToAdd);
      this[collection] = result;
    },
    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index];
      }
    },
    dragStart (){},
    log () {},
    getChildPayload1 (index) {
      return this.items2[index];
    },
    changeMealPlan(event) {
      const id = event.target.value;
      if (id !== '0') {
        const selectedPlan = store.state.userMealPlans.filter(plan => plan.id === Number(id))[0];
        this.fillTableWithPlan(selectedPlan.plan_array); 
        this.planName = selectedPlan.name;
      } else {
        this.fillTableWithPlan(this.emptyTable);
        this.planName = 'Give Your Plan A Name';
      }
    },
    fillTableWithPlan (tableFill) {
      let i = 0;
      for (let j = 0; j < 7; j++ ) {
        for (let k = 0; k < 3; k++) {
          this.scene.children[j].children[k].title = tableFill[i].title;
          this.scene.children[j].children[k].props.recipe.id = tableFill[i].id;
          i++;
        }
      }
    },
    savePlan() {
      let savedTable = [];
      let index = 0;
      for (let i = 0; i < 7; i++){
        for (let j = 0; j < 3; j++) {
          savedTable.push({"id": this.scene.children[i].children[j].props.recipe.id, "title": this.scene.children[i].children[j].title, "position": index});
          index++;
        }
      }
      const toSend = JSON.stringify(savedTable);
      const sendObject = {name: this.planName, userId: store.state.user.id, array: toSend}
      if (this.key === 0) {
        //save new plan
        axios.post('/api/mealplan', sendObject)
          .then(res => console.log(res))
          .catch(err => console.log('error on save of plan ', err));
      } else {
        //save existing plan
        axios.put(`/api/mealplan/${this.key}`, sendObject)
          .then(res => console.log(res))
          .catch(err => console.log('error on save of plan ', err));
      }
    },
    createEmptyTable() {
      let result = [];
      for(let i = 0; i < 21; i++) {
        result.push({title: '', id: 0});
      }
      return result;
    },
    goToRecipe(id) {
      router.push({ name: 'recipe', params: { id: id } })
    }
  }
};
</script>

<style scoped src="../styles/css/MealPlan.css" lang="css"/>
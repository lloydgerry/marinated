<template>
  <div class="recipe-display"> 
    <div class="grid-container">
      <div class="grid-item">
        <h1>{{recipe.title}}</h1>
        <p>Author: {{ recipe.author }}</p>
        <p>Time: {{ recipe.prep_time }}</p>
        <p>Servings: {{ recipe.servings }}</p>
      </div>
      <div class="grid-item" id="ingredients">
        <div 
          class="ingredient"
          v-for="ingredient in recipe.ingredients" 
          :key="ingredient.index"
        >
          {{ ingredient }}
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-item">
        <img :src="recipe.image_url">
      </div>
      <div>
        <div class="prep">
          <p>{{ recipe.preperation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/css/recipePage.css';

export default {
  name: "RecipePage",
  data() {
    return {
      recipe: {
        id: 1,
        title: 'Chewy Molasses Cookies',
        image_url:'https://assets.epicurious.com/photos/54ad3ac96529d92b2c0410ac/6:4/w_620%2Ch_413/51205630_molasses-cookie_1x1.jpg', 
        summary: 'You know that cookie with the slightly crisp edges, chewy center, and magical ability to stay fresh for days? That is the sweet, sassy molasses talking.', 
        ingredients: ["2 cups all-purpose flour", "2 teaspoons baking soda", "1 1/2 teaspoons ground cinnamon", "1 teaspoon ground ginger", "3/4 teaspoons ground cardamom", "1/2 teaspoons kosher salt", "1 large egg", "1/2 cup (1 stick) unsalted butter, melted", "1/3 cup granulated sugar", "1/3 cup mild-flavored (light) or robust-flavored (dark) molasses", "1/4 cup (packed) dark brown sugar", "Coarse sanding or raw sugar (for rolling)"], 
        preperation: 'Place racks in lower and upper thirds of oven; preheat to 375°F. Whisk flour, baking soda, cinnamon, ginger, cardamom, and salt in a small bowl. Whisk egg, butter, granulated sugar, molasses, and brown sugar in a medium bowl. Mix in dry ingredients just to combine. Place sanding sugar in a shallow bowl. Scoop out dough by the tablespoonful and roll into balls (if dough is sticky, chill 20 minutes). Roll in sugar and place on 2 parchment-lined baking sheets, spacing 2 inches apart. Bake cookies, rotating baking sheets halfway through, until cookies are puffed, cracked, and just set around edges (over-baked cookies will not be chewy), 8–10 minutes. Transfer to wire racks and let cool. MAKE AHEAD: Cookie dough can be made and rolled into balls 2 weeks ahead. Freeze on a baking sheet; transfer to resealable plastic bags. Let sit at room temperature 30 minutes before rolling in sugar.', 
        author: 'ALISON ROMAN', 
        source_url: 'https://www.epicurious.com/recipes/food/views/chewy-molasses-cookies-51205630', 
        prep_time: '120 mins',
        servings: 'Makes 2 1/2 dozen'
      }
    }
  }
}
</script>

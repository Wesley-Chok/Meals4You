<template>
    <div class="recipe-details-card" @click.self="$emit('close')">
      <div class="close-icon" @click.stop="goBack">&#10006;</div>
      <div class="card-content">
        <div class="header">
          <h2>{{ meal.strMeal }}</h2>
          <p class="category">Category: {{ meal.strCategory }}</p>
          <p class="area">Area: {{ meal.strArea }}</p>
        </div>
        <div class="ingredients">
          <p>Ingredients:</p>
          <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">
              {{ ingredient }} - {{ measures[index] }}
            </li>
          </ul>
        </div>
        <div class="instructions">
          <p>Instructions:</p>
          <p>{{ meal.strInstructions }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      meal: Object,
    },
    data() {
      return {
        ingredients: [],
        measures: [],
      };
    },
    mounted() {
      console.log('RecipeCard mounted. Meal:', this.meal);
      this.extractIngredients();
    },
    methods: {
      extractIngredients() {
        console.log('Extracting ingredients...');
        for (let i = 1; i <= 20; i++) {
          const ingredient = this.meal[`strIngredient${i}`];
          const measure = this.meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            this.ingredients.push(ingredient);
            this.measures.push(measure);
          }
        }
        console.log('Ingredients:', this.ingredients);
      },
      goBack() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .recipe-details-card {
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80vw;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }
  
  .close-icon {
    align-self: flex-end;
    margin: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  
  .card-content {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
  }
  
  .header {
    text-align: center;
  }
  
  .header h2 {
    margin-bottom: 10px;
  }
  
  .category, .area {
    font-style: italic;
    color: #777;
  }
  
  .ingredients, .instructions {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 5px;
  }
  </style>
  
  
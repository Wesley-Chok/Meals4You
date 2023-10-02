<template>
    <div>
      <div v-for="meal in meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "MainMenu",
    data() {
      return {
        meals: [], // Store the API response here
      };
    },
    created() {
      axios.get('www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => {
          this.meals = response.data.meals;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
<template>
  <div class = "mainmenu">
    <div class="headerWrapper">
      <div id="header"></div>
    </div>
    
    <div class="cardWrapper padded">
      <h2>List all meals by first letter (Letter 'A' Example)</h2>
      <div class="horizontal-scroll-container">
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="card-item">
          <div class="card">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <div class="card-category">{{ meal.strMeal }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cardWrapper padded">
      <h2>Filter by main ingredient (Chicken Breast Example)</h2>
      <div class="horizontal-scroll-container">
        <div v-for="meal in mealsByMainIngredient" :key="meal.idMeal" class="card-item">
          <div class="card">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <div class="card-category">{{ meal.strMeal }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cardWrapper padded">
      <h2>Filter by Category (Seafood Example)</h2>
      <div class="horizontal-scroll-container">
        <div v-for="meal in mealsByCategory" :key="meal.idMeal" class="card-item">
          <div class="card">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <div class="card-category">{{ meal.strMeal }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cardWrapper padded">
      <h2>Filter by Area (Canadian Example)</h2>
      <div class="horizontal-scroll-container">
        <div v-for="meal in mealsByArea" :key="meal.idMeal" class="card-item">
          <div class="card">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <div class="card-category">{{ meal.strMeal }}</div>
          </div>
        </div>
      </div>
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
      meals: [],
      mealsByFirstLetter: [],
      mealsByMainIngredient: [],
      mealsByCategory: [],
      mealsByArea: [],
    };
  },
  created() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        this.meals = response.data.meals;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Fetch meals by first letter 'A'
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        this.mealsByFirstLetter = response.data.meals;
      })
      .catch((error) => {
        console.error('Error fetching meals by first letter:', error);
      });

    // Fetch meals with the main ingredient 'Chicken Breast'
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      .then((response) => {
        this.mealsByMainIngredient = response.data.meals;
      })
      .catch((error) => {
        console.error('Error fetching meals by main ingredient:', error);
      });

    // Fetch meals in the category 'Seafood'
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response) => {
        this.mealsByCategory = response.data.meals;
      })
      .catch((error) => {
        console.error('Error fetching meals by category:', error);
      });

    // Fetch meals from the area 'Canadian'
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then((response) => {
        this.mealsByArea = response.data.meals;
      })
      .catch((error) => {
        console.error('Error fetching meals by area:', error);
      });
  },
};
</script>


<style scoped>
.mainmenu{
  overflow-y: scroll;
  max-height: 80vh;
}
.headerWrapper {
  width: 100%;
  height: 300px;
}

#header {
  background-image: url('../assets/headerImage.png');
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

.padded {
  padding: 100px 0;
}

.cardWrapper {
  overflow-x: scroll;
  overflow-y: auto;
  background: #F4F4F4;
  width: 100%;
}

.horizontal-scroll-container {
  display: flex;
  padding: 10px;
  flex-direction: row;
  overflow: visible;
}

.card {
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  height: 300px;
  margin-right: -20px;
}

.card-item {
  flex: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  background-size: cover !important;
  color: white;
  position: relative;
  border-radius: 5px;
  margin: 0 50px 0 0;
}

.card img {
  width: 100%;
  height: 100%;
}

.card-category {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 10%;
}
</style>




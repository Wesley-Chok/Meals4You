<template>
  <div class="search-page-container">
  <div class="recipe-search-page">
    <h1>Recipe Search</h1>
    <div class="search-container">
      <input v-model="searchQuery" @input="updateSearchQuery" placeholder="Search for a recipe">
      <button @click="searchMeals">Search</button>
    </div>

    <div class="ingredient-filter-container">
      <button v-for="ingredient in ingredients" :key="ingredient" @click="showRecipesByIngredient(ingredient)">
        <FontAwesomeIcon :icon="ingredientIcons[ingredient]" /> {{ ingredient }}
      </button>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="meals.length > 0">
        <h2>Search Results:</h2>
        <div class="recipe-list">
          <div v-for="meal in meals" :key="meal.idMeal" class="recipe-card" @click="showRecipeDetails(meal)">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <div class="recipe-details">
              <h3>{{ meal.strMeal }}</h3>
              <p>{{ meal.strCategory }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No results found.</p>
      </div>

      <transition name="fade">
        <div v-if="selectedMeal" class="recipe-details-overlay" @click.self="closeRecipeDetails">
          <RecipeCard :meal="selectedMeal" @close="closeRecipeDetails" />
        </div>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDrumstickBite, faFish, faHamburger, faBreadSlice, faEgg, faBacon, faUtensils, faDrumstickBite as faDrumstickBiteSolid, faBreadSlice as faBreadSliceSolid } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import RecipeCard from './RecipeCard.vue';

library.add(faDrumstickBite, faFish, faHamburger, faBreadSlice, faEgg, faBacon, faDrumstickBiteSolid, faBreadSliceSolid);

export default {
  data() {
    return {
      searchQuery: '',
      meals: [],
      loading: false,
      selectedMeal: null,
      ingredients: ['chicken', 'salmon', 'beef', 'rice', 'egg', 'broccoli', 'potato', 'pork', 'basil', 'bread'],
      ingredientIcons: {
        'chicken': faDrumstickBite,
        'salmon': faFish,
        'beef': faHamburger,
        'rice': faBreadSlice,
        'egg': faEgg,
        'pork': faBacon,
        'turkey': faDrumstickBiteSolid,
        'bread': faBreadSliceSolid,
        'broccoli': faUtensils, // Placeholder icon
        'potato': faUtensils,   // Placeholder icon
        'basil': faUtensils,    // Placeholder icon
      },
    };
  },
  methods: {
    updateSearchQuery() {
      // This method is called when the input field changes.
      // You can add any validation or processing here.
    },
    searchMeals() {
      if (this.searchQuery) {
        this.loading = true;

        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`;

        axios.get(apiUrl)
          .then((response) => {
            this.meals = response.data.meals;
            this.loading = false;
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            this.loading = false;
          });
      } else {
        this.meals = [];
      }
    },
    showRecipeDetails(meal) {
    this.loading = true;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`;

    axios.get(apiUrl)
      .then((response) => {
        this.selectedMeal = response.data.meals[0];
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      });
  },
    closeRecipeDetails() {
      this.selectedMeal = null;
    },
    showRecipesByIngredient(ingredient) {
      this.loading = true;
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

      axios.get(apiUrl)
        .then((response) => {
          this.meals = response.data.meals;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },
  },
  components: {
    RecipeCard,
    FontAwesomeIcon,
    RecipeCard,
  },
};
</script>

<style scoped>

.search-page-container {
  height: 100vh;
  overflow-y: auto;
}
.recipe-details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.recipe-details-overlay {
  background-color: rgba(255, 255, 255, 0.8);
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #f8ab04;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #f58404;
}

.recipe-list {
  max-height: 3000px;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.recipe-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.recipe-details {
  padding: 10px;
}

.recipe-details h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.recipe-details p {
  font-size: 14px;
  color: #777;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.ingredient-filter-container {
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
}

.ingredient-filter-container button {
  background-color: #f8ab04;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
}

.ingredient-filter-container button:hover {
  background-color: #f58404;
}
</style>

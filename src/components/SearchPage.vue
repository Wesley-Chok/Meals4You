<template>
  <div class="search-page">
    <h1>Meal Search</h1>
    <div class="search-container">
      <input v-model="searchQuery" @input="updateSearchQuery" placeholder="Search for a meal">
      <button @click="searchMeals">Search</button>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="meals.length > 0">
        <h2>Search Results:</h2>
        <div class="meal-list">
          <div v-for="meal in meals" :key="meal.idMeal" class="card-item">
            <div class="card">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" />
              <div class="card-category">{{ meal.strMeal }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No results found.</p>
      </div>
    </div>
  </div>
</template>



  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        searchQuery: '',
        meals: [],
        loading: false,
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
    },
  };
  </script>
  
  <style scoped>
  .search-page {
  max-height: 80vh; /* Set your desired maximum height */
  overflow-y: scroll; /* Enable vertical scrolling */
  }
  .search-container {
    margin-bottom: 20px;
  }
  </style>
  
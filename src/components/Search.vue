<template>
    <div>
      <h1>Meal Search</h1>
      <div class="search-container" @click="navigateToSearchPage">
        <input v-model="searchQuery" placeholder="Search for a meal">
        <button>Search</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Search",
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      navigateToSearchPage() {
        // Use Vue Router to navigate to the search page when the search bar is clicked
        this.$router.push({ name: 'SearchPage' });
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    margin-bottom: 20px;
    cursor: pointer; /* Add a pointer cursor to indicate it's clickable */
  }
  </style>
  
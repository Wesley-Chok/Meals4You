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
        this.$router.push({ name: 'SearchPage' });
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    margin-bottom: 20px;
    cursor: pointer;
  }

  button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
  </style>
  
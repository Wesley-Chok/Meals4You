<template>
  <div class="mainmenu">
    <div class="headerWrapper">
      <div id="header"></div>
    </div>

    <!-- Replace the existing card structures with the new format -->
    <div class="cardWrapper padded">
      <div class="horizontal-scroll-container">
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="card-item">
          <div class="wrap animate pop">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2">
                <h1 class="animate slide-left pop delay-4">{{ meal.strMeal }}</h1>
                <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">Category: <em>{{ meal.strCategory }}</em></p>
              </div>
              <div class="image-content animate slide delay-5">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" />
              </div>
              <div class="dots animate">
                <div class="dot animate slide-up delay-6"></div>
                <div class="dot animate slide-up delay-7"></div>
                <div class="dot animate slide-up delay-8"></div>
              </div>
            </div>
            <div class="text">
              <p>
                <img class="inset" :src="meal.strMealThumb" :alt="meal.strMeal" />
                {{ meal.strInstructions }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Repeat the same structure for other categories if needed -->

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
.mainmenu {
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

.card-item {
  flex: 1;
  margin: 0 20px;
}

/* New card styles matching the format you specified */

.wrap {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 350px; /* Keep the same width as before */
  height: 300px; /* Keep the same height as before */
  border: 8px solid;
  border-image: linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1;
  transition: 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.overlay {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  background: #eb8705;
  transition: 0.4s ease-in-out;
  z-index: 1;
}

.image-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 30%; /* Adjust the width to make the image smaller */
  height: 100%;
  background-size: cover;
  transition: 0.3s ease-in-out;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%; /* Adjust the width to your preference */
  height: 100%;
  padding: 0.5rem 0 0 0.5rem;
  border: 3px solid;
  border-image: linear-gradient(
    to bottom,
    #AEA724 5%,
    rgb(243, 158, 0) 35% 65%,
    #AEA724 95%
  ) 0 0 0 100%;
  transition: 0.3s ease-in-out 0.2s;
  z-index: 1;
}

.inset {
  max-width: 100%; /* Ensure the image within .inset fits the card width */
  margin: 0.25em 1em 1em 0;
  border-radius: 0.25em;
  float: left;
}

.dots {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 55px;
  height: 4vmin;
  transition: 0.3s ease-in-out 0.3s;
}

.dot {
  width: 14px;
  height: 14px;
  background: yellow;
  border: 1px solid indigo;
  border-radius: 50%;
  transition: 0.3s ease-in-out 0.3s;
}

.text {
  position: absolute;
  top: 0;
  right: 0;
  width: 60vmin;
  height: 100%;
  padding: 3vmin 4vmin;
  background: #fff;
  box-shadow: inset 1px 1px 15px 0 rgba(0 0 0 / 0.4);
  overflow-y: scroll;
}

.wrap:hover .overlay {
  transform: translateX(-60vmin);
}

.wrap:hover .image-content {
  width: 30vmin;
}

.wrap:hover .overlay-content {
  border: none;
  transition-delay: 0.2s;
  transform: translateX(60vmin);
}

.wrap:hover .dots {
  transform: translateX(1rem);
}

.wrap:hover .dots .dot {
  background: white;
}

/* Animations and timing delays */
.animate {
  animation-duration: 0.7s;
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  animation-fill-mode: backwards;
}

/* Pop In */
.pop { animation-name: pop; }
@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

/* Slide In */
.slide { animation-name: slide; }
@keyframes slide {
  0% {
    opacity: 0;
    transform: translate(4em, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/* Slide Left */
.slide-left { animation-name: slide-left; }
@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translate(-40px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.slide-up { animation-name: slide-up; }
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(3em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}

.delay-4 {
  animation-delay: 1.2s;
}

.delay-5 {
  animation-delay: 1.5s;
}

.delay-6 {
  animation-delay: 1.8s;
}

.delay-7 {
  animation-delay: 2.1s;
}

.delay-8 {
  animation-delay: 2.4s;
}
</style>




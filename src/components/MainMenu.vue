<template>
  <div class="mainmenu">
    <div class="headerWrapper">
      <div id="header"></div>
    </div>

    <Search />
    
    <div class="cardWrapper padded">
      <h1>Meals by First Letter 'A'</h1>
      <div class="horizontal-scroll-container equal-spacing">
        <div v-for="meal in mealsByFirstLetter" :key="meal.idMeal" class="card-item">
          <div class="wrap animate pop" @mouseover="isHover = true" @mouseleave="isHover = false">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2">

                <h1 class="animate slide-left pop delay-4" v-if="!isHover">{{ meal.strMeal }}</h1>
                <p class="animate slide-left pop delay-5" v-if="!isHover" style="color: white; margin-bottom: 2.5rem;">Category: <em>{{ meal.strCategory }}</em></p>
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
                <p>
                <img class="inset" :src="meal.strMealThumb" :alt="meal.strMeal" />
                {{ meal.strInstructions }}
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cardWrapper padded">
      <h1>Seafood</h1>
      <div class="horizontal-scroll-container equal-spacing">
        <div v-for="meal in mealsByCategory" :key="meal.idMeal" class="card-item">
          <div class="wrap animate pop" @mouseover="isHover = true" @mouseleave="isHover = false">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2">

                <h1 class="animate slide-left pop delay-4" v-if="!isHover">{{ meal.strMeal }}</h1>
                <p class="animate slide-left pop delay-5" v-if="!isHover" style="color: white; margin-bottom: 2.5rem;">Category: <em>{{ meal.strCategory }}</em></p>
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
                <p>
                <img class="inset" :src="meal.strMealThumb" :alt="meal.strMeal" />
                {{ meal.strInstructions }}
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cardWrapper padded">
      <h1>Canadian Meals</h1>
      <div class="horizontal-scroll-container equal-spacing">
        <div v-for="meal in mealsByArea" :key="meal.idMeal" class="card-item">
          <div class="wrap animate pop" @mouseover="isHover = true" @mouseleave="isHover = false">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2">

                <h1 class="animate slide-left pop delay-4" v-if="!isHover">{{ meal.strMeal }}</h1>
                <p class="animate slide-left pop delay-5" v-if="!isHover" style="color: white; margin-bottom: 2.5rem;">Category: <em>{{ meal.strCategory }}</em></p>
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
                <p>
                <img class="inset" :src="meal.strMealThumb" :alt="meal.strMeal" />
                {{ meal.strInstructions }}
              </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cardWrapper padded">
      <h1>Desserts</h1>
  <div class="horizontal-scroll-container equal-spacing">
    <div v-for="meal in mealsByNewCategory" :key="meal.idMeal" class="card-item">
      <div class="wrap animate pop" @mouseover="isHover = true" @mouseleave="isHover = false">
        <div class="overlay">
          <div class="overlay-content animate slide-left delay-2">
            <h1 class="animate slide-left pop delay-4" v-if="!isHover">{{ meal.strMeal }}</h1>
            <p class="animate slide-left pop delay-5" v-if="!isHover" style="color: white; margin-bottom: 2.5rem;">Category: <em>{{ meal.strCategory }}</em></p>
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
            <p>
            <img class="inset" :src="meal.strMealThumb" :alt="meal.strMeal" />
            {{ meal.strInstructions }}
          </p>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import Search from './Search.vue';

export default {
  name: "MainMenu",
  data() {
    return {
      meals: [],
      mealsByFirstLetter: [],
      mealsByMainIngredient: [],
      mealsByCategory: [],
      mealsByArea: [],
      mealsByNewCategory: [],
      isHover: false,
      scrolling: false,
      scrollTimeout: null,
    };
  },
  created() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        this.meals = response.data.meals;
        console.log("Meals from random API:", this.meals);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Fetch meals by first letter 'A'
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        this.mealsByFirstLetter = response.data.meals;
        console.log("Meals by first letter 'A':", this.mealsByFirstLetter);
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
        console.log("Meals by category 'Seafood':", this.mealsByCategory);

        this.fetchInstructionsForCategoryMeals();
      })
      .catch((error) => {
        console.error('Error fetching meals by category:', error);
      });

    // Fetch meals from the area 'Canadian'
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then((response) => {
        this.mealsByArea = response.data.meals;
        console.log("Meals by area 'Canadian':", this.mealsByArea);

        this.fetchInstructionsForAreaMeals();
      })
      .catch((error) => {
        console.error('Error fetching meals by area:', error);
      });

      // Fetch meals in a new category, for example, 'Dessert'
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      .then((response) => {
        this.mealsByNewCategory = response.data.meals;
        console.log("Meals by category 'Dessert':", this.mealsByNewCategory);
        
        this.fetchInstructionsForNewCategoryMeals();
      })
      .catch((error) => {
        console.error('Error fetching meals by category:', error);
      });
  },
  methods: {
    async fetchInstructionsForCategoryMeals() {
      for (const meal of this.mealsByCategory) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const mealDetails = response.data.meals[0];
        meal.strInstructions = mealDetails.strInstructions;
      }
    },
    async fetchInstructionsForCategoryMeals() {
      for (const meal of this.mealsByCategory) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const mealDetails = response.data.meals[0];
        meal.strInstructions = mealDetails.strInstructions;
      }
    },
    async fetchInstructionsForAreaMeals() {
      for (const meal of this.mealsByArea) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const mealDetails = response.data.meals[0];
        meal.strInstructions = mealDetails.strInstructions;
      }
    },
    async fetchInstructionsForNewCategoryMeals() {
      for (const meal of this.mealsByNewCategory) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const mealDetails = response.data.meals[0];
        meal.strInstructions = mealDetails.strInstructions;
      }
    },
    handleScroll() {
      this.scrolling = true;
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.scrollTimeout = setTimeout(() => {
        this.scrolling = false;
      }, 500);
    },
  },
  watch: {
    scrolling(newValue) {
      const mainMenu = document.querySelector('.mainmenu');
      if (mainMenu) {
        if (newValue) {
          mainMenu.classList.remove('hide-scrollbar');
        } else {
          mainMenu.classList.add('hide-scrollbar');
        }
      }
    },
  },
  components: {
    Search,
  },
  mounted() {
    const mainMenu = document.querySelector('.mainmenu');
    if (mainMenu) {
      mainMenu.addEventListener('scroll', this.handleScroll);
    }
  },
};
</script>


<style scoped>
/* Add this rule to keep the scrollbar width consistent */
.mainmenu {
    overflow-y: scroll;
    max-height: 80vh;
    scrollbar-width: thin;
    scrollbar-color: #eb8f05 #F4F4F4;
    max-width: 100%; /* Adjusted to 100% for responsiveness */
    margin: 0 auto;
    padding: 10px; /* Added padding for better visual appeal */
  }

  .headerWrapper {
    width: 100%;
    height: 200px; /* Adjusted height for better responsiveness */
  }

  /* Add a responsive image style for the header */
  #header {
    background-image: url('../assets/headerImage.png');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .padded {
    padding: 20px 10px; /* Adjusted padding for better spacing on smaller screens */
  }

.cardWrapper {
  overflow-x: scroll;
  overflow-y: auto;
  background: #F4F4F4;
  width: 100%;
}

/* Customize the horizontal scroll bar inside cardWrapper */
.horizontal-scroll-container {
  display: flex;
  padding: 10px;
  flex-direction: row;
  overflow: auto;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #ff7300 #F4F4F4; /* Firefox */
}

/* Webkit (Chrome, Safari, Opera) */
.horizontal-scroll-container::-webkit-scrollbar {
  width: 2px;
}

.horizontal-scroll-container::-webkit-scrollbar-thumb {
  background: #e2500c;
  border-radius: 10px; 
  width: 2px;
}

.horizontal-scroll-container::-webkit-scrollbar-track {
  background: #F4F4F4;
}


.card-item {
  flex: 1;
  margin-right: 50px;
}

.equal-spacing {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* You can adjust this as needed */
  overflow-x: auto; /* Add this to enable horizontal scrolling */
  padding: 20px;
}

.wrap {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 350px;
  height: 300px;
  border: 8px solid;
  border-image: linear-gradient(-50deg, #ff8c00, #ffa726, #ff8c00, #ffa726, #ff8c00, #ffa726, #ff8c00, #ffa726, #ff8c00, #ffa726) 1;
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
  background: #eb8f05;
  transition: 0.4s ease-in-out;
  z-index: 1;
}

.image-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background-size: cover;
  transition: 0.3s ease-in-out;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
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
  max-height: 100%; /* Add this line to limit the maximum height of the content */
  max-width: 100%;
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
  max-width: 100%;
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

.wrap:hover .overlay-content h1 {
  display: none;
}
.wrap:hover .text span {
  display: none;
}

.wrap:hover .dots {
  transform: translateX(1rem);
}

.wrap:hover .dots .dot {
  background: white;
}

.animate {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  animation-fill-mode: backwards;
}

.animate.slide-left.pop.delay-4 {
    color: white;
  }
  
  .pop { animation-name: pop; animation-duration: 1s; }

@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.1, 0.1);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.slide { animation-name: slide; animation-duration: 10s; }

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

.slide-left { animation-name: slide-left; animation-duration: 0.5s; }

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
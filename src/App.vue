<template>
  <div id="app">
    <main>
      <!-- Different styles for different devices: -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

/* Define breakpoints for different devices */
@media screen and (max-width: 768px) {
  /* Styles for smaller screens, e.g., mobile phones */
  html, body {
    transform: scale(1.0); /* Adjust the scale as needed */
    transform-origin: top left;
  }
}
</style>
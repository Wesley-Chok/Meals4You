<template>
  <div id="app">
    <main>
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

  @media screen and (max-width: 768px) {
    /* Apply the transformation to specific elements, e.g., the main content */
    html, body, main {
      transform: scale(0.8); /* Adjust the scaling factor as needed */
      transform-origin: top left;
    }
  }
</style>

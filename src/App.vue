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
  // mounted: async () => {
  //   //Animate being hidden after 2500ms and then remove after 500ms
  //   await new Promise((r) => setTimeout(r, 2500));
  //   document.getElementById("white").classList.add("hidden");
  //   await new Promise((r) => setTimeout(r, 500));
  //   document.getElementById("white").remove();
  // },
};
</script>

<style>
/* #login {
  background: url("assets/loginImage.jpg") center center;
  background-size: cover;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
} */
</style>
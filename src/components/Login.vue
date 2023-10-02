<template>
    <div id="login">
      <link href='https://fonts.googleapis.com/css?family=Sacramento' rel='stylesheet'>
      <div class="background-image"></div> <!-- Add a new div for the background image -->
      <div class="main" :style="mainStyle">
        <h1>Meals4You</h1>
        <br />
        <router-link to="/mainmenu">
          <input
            type="button"
            value="Start Cooking"
            class="button"
            id="done"
            :style="inputStyle"
          />
        </router-link>
        <br />
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    props: {
      mainStyle: String,
      inputStyle: String,
    },
  };
  </script>
  
  <style>
  /* Import Poppins font: */
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  
  #login {
    position: relative; /* Add position relative to contain the background image */
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Set the width and height to cover the entire parent */
    height: 100%;
    background-image: url('assets/loginImage.jpg'); /* Add your image URL here */
    background-size: cover; /* Scale the image to cover the entire div */
    opacity: 0.5; /* Adjust the opacity as needed */
    z-index: -1; /* Place the background image behind other content */
  }
  
  .main {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    text-align: center;
    padding: 5px;
    border-radius: 3rem;
    padding-top: 3%;
    padding-bottom: 5%;
    font-family: 'Sacramento';font-size: 22px;
  }
  
  h1 {
    color: #E27D1F;
    cursor: default;
    user-select: none;
  }
input {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}

input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}

#done {
  background: #FFB802;
}

.button {
  cursor: pointer;
  user-select: none;
}
</style>
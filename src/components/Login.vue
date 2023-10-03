<template>
    <div id="login">
      <link href='https://fonts.googleapis.com/css?family=Sacramento' rel='stylesheet'>
      <div class="background">
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
      </div>
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
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

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

  .background {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../assets/loginImage.jpg'); 
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat; 
    background-position: center; 
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
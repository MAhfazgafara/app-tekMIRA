<template>
	<router-view />
</template>
  
  <script>
  
  export default {
	name: "App",
	components: {
	},
  };
  </script>
  
  <style>
  @import "./css/style.css";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap");
  
  html,
  body {
  scroll-behavior: smooth;
	background-color: #F4F3F0;
	font-family: "Montserrat";
	-webkit-font-smoothing: antialiased;
	font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
  }
  </style>
  
<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <h1>Amma Chethi Ruchulu</h1>
        </div>
        <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/menu">Menu</router-link></li>
      <li><router-link to="/recipes">Recipes</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
      </div>
    </nav>
          <!-- Header Section -->
          <header class="header">
        <div class="scrolling-text">
          <span><b>PULL UP A CHAIR.TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY DELICIOUS.</b></span>
        </div>
      </header>
  </template>
  
  <script>
  export default {
    name: 'NavbarSection',
};
  </script>
  
  <style scoped>
  /* Navbar Container */
  .navbar {
    background-color: #1a4429;
    color: rgb(244, 238, 238);
    
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-logo{
    width:100%;
    margin-left: 50px;
  }
  .navbar-logo a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
  }
  .navbar-logo h1 {
    width: 100%;
  }
  
  .navbar-links {
    display: flex;
    gap: 60px;
    list-style: none;
    margin-right:5%;
  }
  
  .navbar-links li {
    display: inline;
  }
  
  .navbar-links a {
    color: rgb(245, 242, 242);
    text-decoration: none;
    font-size: 1rem;
  }
  
  
  /* Optional: Add hover effect */
  .navbar-links a:hover {
    color: #4CAF50;
  }
  /*header style*/
  .header {
    background-color: #66c175;
    color: white;
    text-align: center;
    padding: 25px;
    position: relative;
    overflow: hidden;
  }
  
  .scrolling-text {
    position: absolute;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-size: large;
    color: black;
  }
  
  .scrolling-text span {
    display: inline-block;
    padding-left: 100%; /* Start outside the viewport */
    animation: scroll-left 25s linear infinite; /* Adjust timing as needed */
  }
  
  @keyframes scroll-left {
    from {
      transform: translateX(100%); /* Start at the right of the screen */
    }
    to {
      transform: translateX(-100%); /* Move to the left outside the screen */
    }
  }
  </style>
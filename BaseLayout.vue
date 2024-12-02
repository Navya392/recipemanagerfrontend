<template>
    <div class="home-container">
      <div><NavbarSection/></div>
      <div> <router-view/></div>

      <!-- Footer Section -->
      <footer class="footer">
        <p>Call - 000-000-0000</p>
        <p>Address - ABC Street, ABC city , zipcode - 00000</p>
      </footer>
    </div>
  </template>
  
  <script>


  import NavbarSection from './NavbarSection.vue';
  export default {
    name: "HomeSection",
    components: {

        NavbarSection
    }
  };
  </script>
  
  <style scoped>
  /* Home container with full height */
  .home-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Main content section styling */
  .main-content {
    flex: 1;
    background-color: #c7e8ac;
    padding: 40px;
  }
  
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px; /* Add spacing between text and image */
    flex-wrap: wrap; /* Ensure responsiveness */
  }
  
  .text-section {
    max-width: 50%; /* Adjust as needed */
    text-align: left;
  }
  
  .text-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    margin-left: 50px;
  }
  
  .text-section p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    margin-left: 50px;
    line-height: 1.6;
  }
  
  .cta-button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 50px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #e64a19;
  }
  
  .image-section {
    max-width: 45%; /* Adjust as needed */
  }
  
  .featured-image {
    width: 75%;
    margin-left: 50px;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Footer styling */
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }
  
  .footer p {
    margin: 0;
  }
  
  </style>
  
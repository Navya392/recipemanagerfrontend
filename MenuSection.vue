<template>
    <div class="menu-container">
      <h1>Our Menu</h1>
      <div class="menu-content">
        <div class="menu-item" v-for="(item, index) in menuItems" :key="index">
          <span class="recipe-name">{{ item.name }}</span>
          <span class="recipe-price">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuSection",
    data() {
      return {
        menuItems: [
          { name: "Masala Dosa", price: "$13" },
          { name: "Sambar", price: "$10" },
          { name: "Idli with Sambar", price: "$15" },
          { name: "Vada", price: "$12" },
          { name: "Pongal", price: "$10" },
          { name: "Upma", price: "$9" },
          { name: "Chicken Chettinad", price: "$17" },
          { name: "Fish Fry", price: "$15" },
          { name: "Hyderabadi Biryani", price: "$19" },
          { name: "Kothu Parotta", price: "$13" },
          { name: "Gongura Mutton", price: "$21" },
          { name: "Kerala Prawn Curry", price: "$22" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    padding: 20px;
    background-color: #fef9e7; /* Light yellow background for a warm feel */
    text-align: center;
    min-height: 100vh; /* Full-page height */
    border-radius: 2%;
  }
  
  .menu-container h1 {
    font-size: 2.5rem;
    color: #8b4513; /* Dark brown for a traditional look */
    margin-bottom: 20px;
  }
  
  .menu-content {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-left: 10%;
    gap: 15px; /* Space between each menu item */
  }
  
  .menu-item {
    display: flex;
    justify-content: space-between;
    width: 900px;
    padding: 10px 20px;
    background-color: #fff; /* White background for contrast */
    border: 2px solid #dcdcdc; /* Subtle border */
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  }
  
  .recipe-name {
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }
  
  .recipe-price {
    font-size: 1.2rem;
    color: #8b4513;
    font-weight: bold;
  }
  </style>
  
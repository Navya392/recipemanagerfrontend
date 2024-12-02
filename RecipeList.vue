<template>
    <div class="recipe-list">
      <h1>Our Signature Recipes</h1>
      <div class="recipe-cards">
        <!-- Loop through recipes and pass each recipe data to RecipeCard component -->
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';  // Import axios for HTTP requests
  import RecipeCard from './RecipeCard.vue';
  
  export default {
    data() {
      return {
        recipes: [],
        searchQuery: '' // Current search input  // Initialize an empty array to store recipes
      };
    },
    mounted() {
      this.fetchRecipes();  // Fetch recipes when the component is mounted
    },
    methods: { 
      async fetchRecipes() { 
        try { 
          // Fetch the recipes from your API
          const response = await axios.get('http://localhost:8888/.netlify/functions/recipes');
          this.recipes = response.data;  // Store the fetched data in the recipes array
        } catch (error) {
          console.error("Error fetching recipes:", error);  // Log any errors that occur
        }
      }
    },
    computed: {
    filteredRecipes() {
      // Filter recipes based on the search query
      return this.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
    components: {
      RecipeCard
    }
  };
  </script>
  
  <style scoped>
  .recipe-list {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    background-color: rgb(42, 79, 48);
  }

  .recipe-list h1 {
    color: white;
  }
  
  .recipe-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
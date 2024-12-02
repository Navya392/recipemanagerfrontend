<template>
  <div id="app">
    
    <!-- <NavbarSection /> -->
    <BaseLayout :searchQuery="searchQuery"/><!-- This is where the routed components will appear -->
  </div>
</template>

<script>
//import NavbarSection from './components/NavbarSection.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  data() {
    return {
      searchQuery: '' // Shared search query
    };
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query; // Update search query globally
    }
  },
  name: 'App',
  components: {
    //NavbarSection,

    BaseLayout
  },
};
</script>

<style>
/* Global styles here */
body {
  background-color: #f9f9f9;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>

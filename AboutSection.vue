<template>
  <div class="about-container">
    <h1>About Us</h1>
    <div class="about-content">
      <div class="about-image">
        <img :src="require('@/assets/icon.jpg')" alt="Delicious food" />
      </div>
      <div class="about-text">
        <p>
          Welcome to <b>Amma Chethi Ruchulu</b>, a place where we celebrate the
          rich tradition of home-cooked meals, bringing authentic flavors to your plate.
        </p>
        <p>
          Inspired by our love for cooking, we have created this recipe manager
          to make it easier for everyone to find, organize, and enjoy their favorite dishes. 
          Whether you are looking for traditional South Indian recipes, quick snacks, 
          or gourmet delights, we've got you covered.
        </p>
        <p>
          Our mission is to preserve the essence of homemade food and help you
          rediscover the joy of cooking.<br><b> Happy cooking!</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about-container {
  padding: 20px;
  background-color: #d5f3d8; /* Light gray background for contrast */
  text-align: center;
  border-radius: 2%;
}

.about-container h1 {
  font-size: 2.5rem;
  color: #080a08;
  margin-bottom: 0px;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Space between image and text */
  max-width: 1200px;
  margin: 0 auto;
}

.about-image {
  width: 25%; /* Image takes up 25% of the container */
}

.about-image img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: Rounded corners for the image */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
}

.about-text {
  width: 75%; /* Text takes up 75% of the container */
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  text-align: justify; /* Align text to the left */
}

.about-text b {
  color: #ff5722; /* Highlighted text color */
}
</style>

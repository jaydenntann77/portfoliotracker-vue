<template>
  <div class="about-container">
    <h2 class="about-title">Welcome to CPP</h2>
    <h3 class="about-subtitle">This is an About Page</h3>
    <p class="about-description">
      The Crypto Portfolio feature allows users to track and manage their
      cryptocurrency investments in one convenient location. Users can easily
      add, remove, and update their holdings, providing a comprehensive overview
      of their assets. The portfolio displays real-time market data, including
      current prices, percentage changes, and overall portfolio value, enabling
      users to make informed investment decisions.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-container {
  max-width: 800px; /* Limit the width of the container */
  margin: 20px auto; /* Center the container */
  padding: 20px; /* Add padding */
  background-color: #f9f9f9; /* Light background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.about-title {
  font-size: 2.5em; /* Larger font size for the title */
  color: #155db4; /* Title color */
  text-align: center; /* Center the title */
  margin-bottom: 10px; /* Space below the title */
}

.about-subtitle {
  font-size: 1.5em; /* Subtitle font size */
  color: #333; /* Subtitle color */
  text-align: center; /* Center the subtitle */
  margin-bottom: 20px; /* Space below the subtitle */
}

.about-description {
  font-size: 1.1em; /* Description font size */
  color: #555; /* Description color */
  line-height: 1.6; /* Improve line spacing */
  text-align: center; /* Justify text for better readability */
}
</style>

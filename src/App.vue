<script>
export default {
  name: "App",
};
</script>


<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/about" class="nav-link">About</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/profit" class="nav-link">Profits</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif; /* Set a default font */

  min-height: 100vh; /* Full height for the app */
  padding: 20px; /* Padding around the app */
}

.navbar {
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center the navigation links */
  align-items: center; /* Center vertically */
  background-color: #155db4; /* Background color for the navbar */
  padding: 10px 0; /* Padding for the navbar */
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 20px; /* Space below the navbar */
  width: 90%;
  margin: auto;
}

.nav-link {
  color: white; /* Text color for links */
  text-decoration: none; /* Remove underline from links */
  padding: 10px 15px; /* Padding around links */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Lighten background on hover */
  border-radius: 4px; /* Rounded corners on hover */
}

.nav-separator {
  color: white; /* Color for the separator */
  margin: 0 10px; /* Space around the separator */
}
</style>
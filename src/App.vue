<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>  
  export default {
    name: 'app',
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Cookie');

  body {
    background-image: url('./assets/background.png');
    background-attachment: fixed;
  }

  h1 {
    font-family: 'Cookie', cursive;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>

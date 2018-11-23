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
  body {
    background-image: url('./assets/background.png');
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(148, 43, 43);
  }
</style>

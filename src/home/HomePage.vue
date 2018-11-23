<template>
  <div>
    <Navigation />
    <header>
      <router-link to="/home">
        <img src="../assets/logo.png" alt="Santa's Workshop" />
      </router-link>
      <h3>
        Quality toys est. 1843 — unless you're on the naughty list
      </h3>
    </header>
  </div>
</template>

<script>
  import Navigation from '../navigation/Navigation.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Navigation
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    position: relative;
    margin-top: 75px;
  }
  
  header img {
    width: 75%;
  }
  
  header h3 {
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 2vw;
    font-style: italic;
    margin-top: -3.5vw;
  }
</style>

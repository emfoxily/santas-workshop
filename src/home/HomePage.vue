<template>
  <div>
    <header>
      <img src="../assets/logo.png" alt="Santa's Workshop" />
      <h3>
        Quality toys est. 1843 — unless you're on the naughty list
      </h3>
      <nav>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  
  nav {
    top: 0;
    width: 100%;
    padding: 1em;
  }
  
  nav li {
    list-style: none;
  }
</style>

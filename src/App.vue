<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            Santa's Workshop
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
  import HomePage from './components/HomePage.vue';
  
  export default {
    name: 'app',
    components: {
      HomePage,
    },
  };
</script>

<style>
  body {
    background-color: rgb(148, 43, 43);
  }

  nav li {
    list-style: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
  }
</style>

<template>
  <div id="app">
    <main>
      <router-view @authenticated="setAuthenticated" />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        authenticated: false,
        account: {
          username: "walter_hobbs",
          password: "christmasl0ver"
        }
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({
          name: "login"
        })
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
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

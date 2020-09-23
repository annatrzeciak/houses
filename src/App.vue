<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap');

  body{
    margin: 0;
  }
#app {
  color: #252525;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

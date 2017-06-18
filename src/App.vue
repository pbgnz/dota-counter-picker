<template>
  <div id="app">
    <h1>Dota 2 counter picker</h1>
    <h3>Select the enemy heroes</h3>
    <grid />
  </div>
</template>

<script>
  import Grid from './components/Grid.vue';
  export default {
    name: 'app',
    components: { Grid },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<style>
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>

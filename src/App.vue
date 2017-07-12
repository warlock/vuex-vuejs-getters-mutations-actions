<template>
  <div id="app">
    <router-view></router-view>
        <menucomp></menucomp>

  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'app',
  components: {
    'menucomp': Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

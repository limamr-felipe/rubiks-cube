<template lang="pug">
  #app
    cube
</template>

<script>
import Cube from '@/cube/views/Cube.vue'

export default {
  name: 'App',
  components: {
    Cube
  }
}
</script>

<style lang="scss">
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>

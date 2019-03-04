<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <main-frame></main-frame> -->
    <app-common></app-common>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppCommon from './pages/app.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // MainFrame
    AppCommon
  }
}
</script>

<style>
html,body,#app{
  height:100%;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-size: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>

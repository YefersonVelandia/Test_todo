<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <CounterVue /> -->
  <router-view />
  <!-- <Main /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterVue from './components/LoginForm.vue'
import MainVue from './layout/Main.vue'
import Main from './layout/Main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CounterVue,
    MainVue,
    Main
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

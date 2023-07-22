
<template class="app">
  <section>
    <About/>
    <AboutArchitecture/>
  </section>
</template>

<script>
import About from './components/About.vue';
import AboutArchitecture from './components/AboutArchitecture.vue';

export default {
  name: 'App',
  components: {
    About,
    AboutArchitecture
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

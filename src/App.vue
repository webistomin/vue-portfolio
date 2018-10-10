<template>
  <div id="app">
    <home></home>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home';

  export default {
    name: 'app',
    components: {
      Home,
    },
  };
</script>

<style>
</style>

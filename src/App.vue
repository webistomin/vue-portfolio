<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader';

  export default {
    name: 'app',
    components: {
      PageHeader,
    },
  };
</script>

<style>
</style>

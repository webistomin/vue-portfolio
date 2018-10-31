<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.3s ease;
  }
  .fade-leave {
  }
  .fade-leave-active {
    transition: opacity 0.3s ease;
    opacity: 0;
  }
</style>

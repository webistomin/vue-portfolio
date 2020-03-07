<template lang="pug">
  main(role='main').page-content
    slot
</template>

<script>
  export default {
    name: 'AppContent',
  };
</script>

<style lang="sass">
  @import "AppContent"
</style>

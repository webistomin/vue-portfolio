<template lang="pug">
  #app
    AppHeader
    nuxt
    AppFooter
</template>

<script>
  import AppHeader from '@/components/partials/AppHeader/AppHeader';
  import AppFooter from '@/components/partials/AppFooter/AppFooter';

  export default {
    components: { AppFooter, AppHeader },
  };
</script>

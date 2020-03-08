<template lang="pug">
  AppContent
    AppPortfolio
</template>

<script>
  import sal from 'sal.js';
  import AppPortfolio from '@/components/ui/AppPortfolio/AppPortfolio';
  import AppContent from '@/components/partials/AppContent/AppContent';

  export default {
    name: 'Portfolio',
    components: { AppContent, AppPortfolio },
    mounted() {
      sal();
    },
  };
</script>

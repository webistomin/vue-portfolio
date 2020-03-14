<template lang="pug">
  AppContent
    AppPortfolio
</template>

<script>
  import sal from 'sal.js';
  import AppContent from '@/components/partials/AppContent/AppContent';
  import AppPortfolio from '@/components/ui/AppPortfolio/AppPortfolio';

  export default {
    name: 'Portfolio',
    components: { AppContent, AppPortfolio },
    mounted() {
      sal();
    },
  };
</script>

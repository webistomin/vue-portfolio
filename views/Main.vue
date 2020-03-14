<template lang="pug">
  AppContent
    AppAbout
    AppPortfolio
</template>

<script>
  import sal from 'sal.js';
  import AppContent from '@/components/partials/AppContent/AppContent';
  import AppAbout from '@/components/ui/AppAbout/AppAbout';
  import AppPortfolio from '@/components/ui/AppPortfolio/AppPortfolio';

  export default {
    name: 'Main',
    components: { AppPortfolio, AppAbout, AppContent },
    mounted() {
      sal();
    },
    head() {
      return {
        title: this.$t('meta.homeTitle'),
      };
    },
  };
</script>

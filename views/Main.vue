<template lang="pug">
  AppContent
    AppAbout
</template>

<script>
  import AppContent from '@/components/partials/AppContent/AppContent';
  import AppAbout from '@/components/ui/AppAbout/AppAbout';

  export default {
    name: 'Main',
    components: { AppAbout, AppContent },
    head() {
      return {
        title: 'Алексей Истомин :: Фронтенд разработчик',
      };
    },
  };
</script>

<template lang="pug">
  AppContent
    h1 {{ $t('about.title') }}
</template>

<script>
  import AppContent from '@/components/partials/AppContent/AppContent';

  export default {
    name: 'Main',
    components: { AppContent },
    head() {
      return {
        title: 'Алексей Истомин :: Фронтенд разработчик',
      };
    },
  };
</script>

<template lang="pug">
  h1 {{ $t('about.title') }}
</template>

<script>
  export default {
    name: 'Main',
    head() {
      return {
        title: 'Алексей Истомин :: Фронтенд разработчик',
      };
    },
  };
</script>

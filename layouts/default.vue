<template lang="pug">
  #app
    noscript Please turn javascript on and reload the page 😋
    AppHeader
    nuxt
    AppFooter
</template>

<script>
  import throttle from 'lodash.throttle';
  import AppHeader from '@/components/partials/AppHeader/AppHeader';
  import AppFooter from '@/components/partials/AppFooter/AppFooter';

  export default {
    components: { AppFooter, AppHeader },
    mounted() {
      let lastHeight = window.innerHeight;
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      window.addEventListener(
        'resize',
        throttle(() => {
          if (window.innerWidth > window.innerHeight || Math.abs(lastHeight - window.innerHeight) > 200) {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            lastHeight = window.innerHeight;
          }
        }, 300),
        { passive: true }
      );
    },
  };
</script>

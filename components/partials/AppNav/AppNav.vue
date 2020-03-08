<template lang="pug">
  nav.main-nav(
    :class="{'main-nav_opened' : isNavOpened, 'main-nav_closed' : !isNavOpened}"
    role='navigation'
  )
    ul.main-nav__list
      li.main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#about")'
          href='#about'
          )
          | {{ $t('mainNav.firstLink') }}
      li.main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#portfolio")'
          href='#portfolio'
          )
          | {{ $t('mainNav.secondLink') }}
      li.main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#contacts")'
          href='#contacts'
          )
          | {{ $t('mainNav.thirdLink') }}
</template>

<script>
  export default {
    name: 'AppNav',
    props: {
      isNavOpened: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      scrollToElement(e, el) {
        e.preventDefault();
        this.$scrollTo(el, 1000, {
          easing: [0.215, 0.61, 0.355, 1],
          offset: -80,
        });
      },
    },
  };
</script>

<style lang="sass">
  @import "AppNav"
</style>

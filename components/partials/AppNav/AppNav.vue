<template lang="pug">
  nav.main-nav(
    :class="{'main-nav_opened' : isNavOpened, 'main-nav_closed' : !isNavOpened}"
    role='navigation'
  )
    ul.main-nav__list
      li.main-nav__item
        a.main-nav__link(href='#about')
          | {{ $t('mainNav.firstLink') }}
      li.main-nav__item
        a.main-nav__link(href='#portfolio')
          | {{ $t('mainNav.secondLink') }}
      li.main-nav__item
        a.main-nav__link(href='#contacts')
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
  };
</script>

<style lang="sass">
  @import "AppNav"
</style>

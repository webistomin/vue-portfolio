<template lang="pug">
  nav.main-nav(
    :class="{'main-nav_opened' : isNavOpened, 'main-nav_closed' : !isNavOpened}"
    role='navigation'
  )
    ul.main-nav__list
      li(v-if='!isMainPage' :class='{"main-nav__item_blue" : !isMainPage}').main-nav__item
        nuxt-link.main-nav__link(to='/' :class='{"main-nav__link_white" : !isMainPage}')
          | {{ $t('mainNav.fourthLink') }}
      li(v-else :class='{"main-nav__item_blue" : !isMainPage}').main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#about")'
          href='#about'
          :class='{"main-nav__link_white" : !isMainPage}'
          )
          | {{ $t('mainNav.firstLink') }}
      li(:class='{"main-nav__item_blue" : !isMainPage}').main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#portfolio")'
          href='#portfolio'
          :class='{"main-nav__link_white" : !isMainPage}'
          )
          | {{ $t('mainNav.secondLink') }}
      li(:class='{"main-nav__item_blue" : !isMainPage}').main-nav__item
        a.main-nav__link(
          @click='scrollToElement($event, "#contacts")'
          href='#contacts'
          :class='{"main-nav__link_white" : !isMainPage}'
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
      isMainPage: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="sass">
  @import "AppNav"
</style>

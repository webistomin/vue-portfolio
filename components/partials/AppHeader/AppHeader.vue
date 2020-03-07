<template lang="pug">
  header.page-header(role='banner')
    .page-header__inner
      .page-header__links
        nuxt-link.page-header__link.page-header__link_ru(
          title='Russian version'
          :class='{"page-header__link_active" : $store.state.locale === "ru"}'
          to='/'
          ) RU
        span /
        nuxt-link.page-header__link.page-header__link_en(
          title='English version'
          :class='{"page-header__link_active" : $store.state.locale === "en"}'
          to='/en'
          ) EN
      .page-header__logotype
        h1.page-header__logo Istomin.
        span.page-header__desc {{ $t('pageHeader.desc') }}
      button(
        :class="{'page-header__toggle_opened' : isOpened}"
        @click='openMenu'
        type='button'
        tabindex='0'
        ).page-header__toggle
        | Open menu
        span.page-header__line
        span.page-header__line
        span.page-header__line
      AppNav(:isNavOpened='isOpened')
      AppSocials
    AppIntro
</template>

<script>
  import AppNav from '@/components/partials/AppNav/AppNav';
  import AppSocials from '@/components/ui/AppSocials/AppSocials';
  import AppIntro from '@/components/ui/AppIntro/AppIntro';

  export default {
    name: 'AppHeader',
    components: { AppIntro, AppSocials, AppNav },
    data() {
      return {
        isOpened: false,
      };
    },
    methods: {
      openMenu() {
        this.isOpened = !this.isOpened;
      },
    },
  };
</script>

<style lang="sass">
  @import "AppHeader"
</style>

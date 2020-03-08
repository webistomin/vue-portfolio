<template lang="pug">
  header.page-header(
    role='banner'
    :class='{"page-header_blue" : !isMainPage}'
    )
    .page-header__inner(:class='{"page-header__inner_blue" : !isMainPage}')
      .page-header__decor(data-cursor-white :class='{"page-header__decor_wide" : !isMainPage}')
      .page-header__links(:class='{"page-header__links_high" : !isMainPage}')
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
        h1.page-header__logo
          nuxt-link(to='/').page-header__home Istomin.
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
      AppNav(:isNavOpened='isOpened' :isMainPage='isMainPage')
      AppSocials(
        :isSquared='true'
        :socials='socials'
        :isWhite='!isMainPage'
      )
    AppIntro(v-if='isMainPage')
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
        socials: [
          {
            link: 'https://t.me/webistomin',
            name: 'Telegram',
          },
          {
            link: 'https://vk.com/webistomin',
            name: 'Vk',
          },
          {
            link: 'https://linkedin.com/in/webistomin',
            name: 'LinkedIn',
          },
        ],
      };
    },
    computed: {
      isMainPage() {
        return this.$route.name === 'main';
      },
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

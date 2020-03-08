<template lang="pug">
  section#portfolio.portfolio
    .portfolio__container.container
      h3(data-animation='fade-up').portfolio__title.title {{ $t("portfolio.title") }}
      ul.portfolio__list
        li(data-animation='fade-up').portfolio__item.portfolio__item_blue(tabindex='0')
          figure.portfolio__figure
            v-lazy-image.portfolio__pic(
              use-picture
              src='/img/portfolio/movie-mobile.jpg'
              alt='Movie App'
              )
              source(type='image/webp', media='(min-width: 1280px)', srcset='/img/portfolio/movie-desktop.webp 1x,\
              /img/portfolio/movie-desktop@2x.webp 2x')
              source(type='image/webp', media='(min-width: 1024px)', srcset='/img/portfolio/movie-tablet.webp 1x,\
              /img/portfolio/movie-tablet@2x.webp 2x')
              source(type='image/webp', media='(min-width: 320px)', srcset='/img/portfolio/movie-mobile.webp 1x,\
              /img/portfolio/movie-mobile@2x.webp 2x')
              source(media='(min-width: 1280px)', srcset='/img/portfolio/movie-desktop.jpg 1x,\
              /img/portfolio/movie-desktop@2x.jpg 2x')
              source(media='(min-width: 1024px)', srcset='/img/portfolio/movie-tablet.jpg 1x,\
              /img/portfolio/movie-tablet@2x.jpg 2x')
              source(media='(min-width: 320px)', srcset='/img/portfolio/movie-mobile.jpg 1x,\
              /img/portfolio/movie-mobile@2x.jpg 2x')
            figcaption.portfolio__caption
              | {{ $t("portfolio.caption") }} "Movie App"
          .portfolio__buttons
            a.portfolio__link.btn(href='https://vuejs-movie-app.firebaseapp.com/', target='_blank', rel='noopener noreferrer') {{ $t("portfolio.firstBtn") }}
            a.portfolio__link.btn(href='https://github.com/webistomin/vuejs-movie-app', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.secondBtn") }}
        li(data-animation='fade-up').portfolio__item.portfolio__item_top(tabindex='0')
          figure.portfolio__figure
            v-lazy-image.portfolio__pic(
              use-picture
              src='/img/portfolio/yandex-mobile.jpg'
              alt='Yandex.Rooms'
              )
              source(type='image/webp', media='(min-width: 1280px)', srcset='/img/portfolio/yandex-desktop.webp 1x,\
              /img/portfolio/yandex-desktop@2x.webp 2x')
              source(type='image/webp', media='(min-width: 1024px)', srcset='/img/portfolio/yandex-tablet.webp 1x,\
              /img/portfolio/yandex-tablet@2x.webp 2x')
              source(type='image/webp', media='(min-width: 320px)', srcset='/img/portfolio/yandex-mobile.webp 1x,\
              /img/portfolio/yandex-mobile@2x.webp 2x')
              source(media='(min-width: 1280px)', srcset='/img/portfolio/yandex-desktop.jpg 1x,\
              /img/portfolio/yandex-desktop@2x.jpg 2x')
              source(media='(min-width: 1024px)', srcset='/img/portfolio/yandex-tablet.jpg 1x,\
              /img/portfolio/yandex-tablet@2x.jpg 2x')
              source(media='(min-width: 320px)', srcset='/img/portfolio/yandex-mobile.jpg 1x,\
              /img/portfolio/yandex-mobile@2x.jpg 2x')
            figcaption.portfolio__caption
              | {{ $t("portfolio.caption") }} "Yandex.Rooms"
          .portfolio__buttons
            a.portfolio__link.btn(href='https://yandex-rooms.firebaseapp.com/', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.firstBtn") }}
            a.portfolio__link.btn(href='https://github.com/webistomin/yandex-test', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.secondBtn") }}
        li(data-animation='fade-up').portfolio__item.portfolio__item_margin(tabindex='0')
          figure.portfolio__figure
            v-lazy-image.portfolio__pic(
              src='/img/portfolio/weather-mobile.jpg'
              alt='Weather App'
              use-picture
              )
              source(type='image/webp', media='(min-width: 1280px)', srcset='/img/portfolio/weather-desktop.webp 1x,\
              /img/portfolio/weather-desktop@2x.webp 2x')
              source(type='image/webp', media='(min-width: 1024px)', srcset='/img/portfolio/weather-tablet.webp 1x,\
              /img/portfolio/weather-tablet@2x.webp 2x')
              source(type='image/webp', media='(min-width: 320px)', srcset='/img/portfolio/weather-mobile.webp 1x,\
              /img/portfolio/weather-mobile@2x.webp 2x')
              source(media='(min-width: 1280px)', srcset='/img/portfolio/weather-desktop.jpg 1x,\
              /img/portfolio/weather-desktop@2x.jpg 2x')
              source(media='(min-width: 1024px)', srcset='/img/portfolio/weather-tablet.jpg 1x,\
              /img/portfolio/weather-tablet@2x.jpg 2x')
              source(media='(min-width: 320px)', srcset='/img/portfolio/brume-mobile.jpg 1x,\
              /img/portfolio/weather-mobile@2x.jpg 2x')
            figcaption.portfolio__caption {{ $t("portfolio.caption") }} "Weather App"
          .portfolio__buttons
            a.portfolio__link.btn(href='https://vuejs-weather-app-32dde.firebaseapp.com/', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.firstBtn") }}
            a.portfolio__link.btn(href='https://github.com/webistomin/vuejs-weather-app', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.secondBtn") }}
        li(data-animation='fade-up').portfolio__item(tabindex='0')
          figure.portfolio__figure
            v-lazy-image.portfolio__pic(
              src='/img/portfolio/aviasales-mobile.jpg'
              alt='Aviasales Test'
              use-picture
              )
              source(type='image/webp', media='(min-width: 1280px)', srcset='/img/portfolio/aviasales-desktop.webp 1x,\
            /img/portfolio/aviasales-desktop@2x.webp 2x')
              source(type='image/webp', media='(min-width: 1024px)', srcset='/img/portfolio/aviasales-tablet.webp 1x,\
              /img/portfolio/aviasales-tablet@2x.webp 2x')
              source(type='image/webp', media='(min-width: 320px)', srcset='/img/portfolio/aviasales-mobile.webp 1x,\
              /img/portfolio/aviasales-mobile@2x.webp 2x')
              source(media='(min-width: 1280px)', srcset='/img/portfolio/aviasales-desktop.jpg 1x,\
              /img/portfolio/aviasales-desktop@2x.jpg 2x')
              source(media='(min-width: 1024px)', srcset='/img/portfolio/aviasales-tablet.jpg 1x,\
              /img/portfolio/aviasales-tablet@2x.jpg 2x')
              source(media='(min-width: 320px)', srcset='/img/portfolio/aviasales-mobile.jpg 1x,\
              /img/portfolio/aviasales-mobile@2x.jpg 2x')
            figcaption.portfolio__caption {{ $t("portfolio.caption") }} "Aviasales Test"
          .portfolio__buttons
            a.portfolio__link.btn(href='https://aviasales-test-b5f54.firebaseapp.com/', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.firstBtn") }}
            a.portfolio__link.btn(href='https://github.com/webistomin/aviasales-test', target='_blank', rel='noopener noreferrer') {{ $t("portfolio.secondBtn") }}
        li(data-animation='fade-up').portfolio__item.portfolio__item_margin(tabindex='0')
          figure.portfolio__figure
            v-lazy-image.portfolio__pic(
              src='/img/portfolio/sport-mobile.jpg'
              alt='sport'
              use-picture
              )
              source(type='image/webp', media='(min-width: 1280px)', srcset='/img/portfolio/sport-desktop.webp 1x,\
            /img/portfolio/sport-desktop@2x.webp 2x')
              source(type='image/webp', media='(min-width: 1024px)', srcset='/img/portfolio/sport-tablet.webp 1x,\
                /img/portfolio/sport-tablet@2x.webp 2x')
              source(type='image/webp', media='(min-width: 320px)', srcset='/img/portfolio/sport-mobile.webp 1x,\
                /img/portfolio/sport-mobile@2x.webp 2x')
              source(media='(min-width: 1280px)', srcset='/img/portfolio/sport-desktop.jpg 1x,\
                /img/portfolio/sport-desktop@2x.jpg 2x')
              source(media='(min-width: 1024px)', srcset='/img/portfolio/sport-tablet.jpg 1x,\
                /img/portfolio/sport-tablet@2x.jpg 2x')
              source(media='(min-width: 320px)', srcset='/img/portfolio/sport-mobile.jpg 1x,\
                /img/portfolio/sport-mobile@2x.jpg 2x')
            figcaption.portfolio__caption {{ $t("portfolio.caption") }} "Sport store"
          .portfolio__buttons
            a.portfolio__link.btn(href='http://ishop.mcdir.ru/', target='_blank', rel='noopener noreferrer')
              | {{ $t("portfolio.firstBtn") }}
            a.portfolio__link.btn(href='https://github.com/webistomin/my-shop', target='_blank', rel='noopener noreferrer') {{ $t("portfolio.secondBtn") }}
      nuxt-link.portfolio__link.btn(to='/portfolio' data-animation='fade-up')
        | {{ $t("portfolio.thirdBtn") }}

</template>

<script>
  export default {
    name: 'AppPortfolio',
  };
</script>

<style lang="sass">
  @import "AppPortfolio"
</style>

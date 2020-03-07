<template lang="pug">
  section#about.about
    .about__container.container
      h3.about__title.title {{ $t("about.title") }}
      p.about__text {{ $t("about.firstText") }}
      p.about__text {{ $t("about.secondText") }}
      p.about__text {{ $t("about.thirdText") }}
      ul.about__list
        li.about__item HTML 5
        li.about__item CSS 3
        li.about__item JavaScript (ES5, ES6+)
        li.about__item Vue.js (Vuex, Vue Router, Vuetify, vue-i18n)
        li.about__item Nuxt.js, SSR
        li.about__item LESS/SASS
        li.about__item Git
        li.about__item Gulp, Webpack
        li.about__item JQuery plugins
        li.about__item Cross-browser markup
        li.about__item BEM-like naming and code organization
        li.about__item Photoshop and Avocode
      p.about__text {{ $t("about.fourthText") }}
      p.about__text {{ $t("about.fifthText") }}
      p.about__text {{ $t("about.sixthText") }}
      p.about__text {{ $t("about.seventhText") }}
      h4.about__title.about__title_small.title {{ $t("about.titleSecond") }}
      .about__desc
        .about__info
          span.about__degree {{ $t("about.degree") }}
          time.about__date 2014-2018
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | {{ $t("about.place") }}
      .about__desc
        .about__info
          span.about__degree Школа разработки интерфейсов
          time.about__date 2019
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Яндекс
</template>

<script>
  export default {
    name: 'AppAbout',
  };
</script>

<style lang="sass">
  @import "AppAbout"
</style>

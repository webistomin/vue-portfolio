<template lang="pug" functional>
  section#about.about
    .about__container.container
      h3(data-animation='fade-up').about__title.title {{ parent.$t("about.title") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.firstText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.secondText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.thirdText") }}
      ul(data-animation='fade-up').about__list
        li.about__item HTML, CSS, JavaScript
        li.about__item Vue.js (Vuex, Vue Router, Vuetify, vue-i18n)
        li.about__item React.js (Redux, React Router, Redux Saga)
        li.about__item Nuxt.js, SSR
        li.about__item Node.js (Express.js)
        li.about__item TypeScript
        li.about__item LESS/SASS/CSS Modules
        li.about__item GSAP
        li.about__item Git
        li.about__item Gulp, Webpack
        li.about__item Abobe Photoshop, Adobe XD, Avocode, Figma
      p(data-animation='fade-up').about__text {{ parent.$t("about.fourthText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.fifthText") }}

      h4(data-animation='fade-up').about__title.about__title_small.title {{parent.$t("about.experience")}}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{parent.$t("about.post-markup")}}
          time.about__date 2017-2017
        p.about__place
          a.about__link(href='http://afalab.ru/', target='_blank', rel='noopener noreferrer')
            | Afalab
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{parent.$t("about.post")}}
          time.about__date 2018-2020
        p.about__place
          a.about__link(href='http://ggpa.ru/', target='_blank', rel='noopener noreferrer')
            | Ginger Grandpa
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{parent.$t("about.post")}}
          time.about__date 2020 - 2020
        p.about__place
          a.about__link(href='https://yandexlyceum.ru/', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.ya")}}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{parent.$t("about.post")}}
          time.about__date 2020 - {{parent.$t("about.nowadays")}}
        p.about__place
          a(href='https://www.svyaznoy.ru/' target='_blank', rel='noopener noreferrer').about__link {{parent.$t("about.svyaznoy")}}

      h4(data-animation='fade-up').about__title.about__title_small.title {{ parent.$t("about.titleSecond") }}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{ parent.$t("about.degree") }}
          time.about__date 2014-2018
        p.about__place
          a.about__link(href='http://www.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | {{ parent.$t("about.place") }}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{ parent.$t("about.shri") }}
          time.about__date 2019
        p.about__place
          a.about__link(href='https://yandex.ru/promo/academy/shri', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.ya")}}

      h4(data-animation='fade-up').about__title.about__title_small.title {{parent.$t("about.opensource")}}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree posthtml-link-noreferrer
          time.about__date 2019
        p.about__place
          a.about__link(href='https://github.com/webistomin/posthtml-link-noreferrer', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.project-noref")}}

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree posthtml-link-lazyload
          time.about__date 2019
        p.about__place
          a.about__link(href='https://github.com/webistomin/posthtml-lazyload', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.project-lazy")}}

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree vue-testing-handbook
          time.about__date 2019
        p.about__place
          a.about__link(href='https://lmiller1990.github.io/vue-testing-handbook/ru/', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.project-book")}}

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree nanogram.js
          time.about__date 2020
        p.about__place
          a.about__link(href='https://github.com/webistomin/nanogram.js', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.project-nano")}}

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree favoritos
          time.about__date 2020
        p.about__place
          a.about__link(href='https://github.com/webistomin/favoritos', target='_blank', rel='noopener noreferrer')
            | {{parent.$t("about.project-favoritos")}}
</template>

<script>
  export default {
    name: 'AppAbout',
  };
</script>

<style lang="sass">
  @import "AppAbout"
</style>

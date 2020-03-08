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
        li.about__item Git
        li.about__item Gulp, Webpack
        li.about__item Abobe Photoshop, Adobe XD, Avocode, Figma
      p(data-animation='fade-up').about__text {{ parent.$t("about.fourthText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.fifthText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.sixthText") }}
      p(data-animation='fade-up').about__text {{ parent.$t("about.seventhText") }}

      h4(data-animation='fade-up').about__title.about__title_small.title Опыт работы
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree Фронтенд-разработчик
          time.about__date 2018-2020
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Ginger Grandpa
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree Фронтенд-разработчик
          time.about__date 2020 - настоящее время
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Яндекс

      h4(data-animation='fade-up').about__title.about__title_small.title {{ parent.$t("about.titleSecond") }}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree {{ parent.$t("about.degree") }}
          time.about__date 2014-2018
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | {{ parent.$t("about.place") }}
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree Школа разработки интерфейсов
          time.about__date 2019
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Яндекс

      h4(data-animation='fade-up').about__title.about__title_small.title Открытые проекты
      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree posthtml-link-noreferrer
          time.about__date 2019
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Пакет плагин для PostHTML

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree posthtml-link-lazyload
          time.about__date 2019
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Пакет плагин для PostHTML

      .about__desc(data-animation='fade-up')
        .about__info
          span.about__degree vue-testing-handbook
          time.about__date 2019
        p.about__place
          a.about__link(href='http://eng.ggtu.ru/', target='_blank', rel='noopener noreferrer')
            | Перевод книги по тестированию Vue-приложений на русский язык
</template>

<script>
  export default {
    name: 'AppAbout',
  };
</script>

<style lang="sass">
  @import "AppAbout"
</style>

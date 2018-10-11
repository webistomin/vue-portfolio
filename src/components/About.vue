<template>
  <section class="about" id="about"><h3 class="about__title title">{{ $t("about.title") }}</h3>
    <p class="about__text">{{ $t("about.firstText") }}</p>
    <p class="about__text">{{ $t("about.secondText") }}</p>
    <p class="about__text">{{ $t("about.thirdText") }}</p>
    <ul class="about__list">
      <li class="about__item">HTML 5</li>
      <li class="about__item">CSS 3</li>
      <li class="about__item">JavaScript (ES5, ES6+)</li>
      <li class="about__item">Vue.js (Vuex, Vue Router, Vuetify)</li>
      <li class="about__item">LESS</li>
      <li class="about__item">Git</li>
      <li class="about__item">Gulp, Webpack</li>
      <li class="about__item">JQuery plugins</li>
      <li class="about__item">Cross-browser markup</li>
      <li class="about__item">BEM-like naming and code organization</li>
      <li class="about__item">Photoshop and Avocode</li>
    </ul>
    <p class="about__text">{{ $t("about.fourthText") }}</p>
    <p class="about__text">{{ $t("about.fifthText") }}</p>
    <p class="about__text">{{ $t("about.sixthText") }}</p>
    <p class="about__text">{{ $t("about.seventhText") }}</p>
    <h4 class="about__title about__title--small title">Education</h4>
    <div class="about__desc">
      <div class="about__info">
        <span class="about__degree">Bachelor's degree with honors</span>
        <time class="about__date">2014-2018</time>
      </div>
      <p class="about__place">
        <a href="http://eng.ggtu.ru/" class="about__link" target="_blank"
           rel="noopener noreferrer">State University of Humanities and Technology,
          Orekhovo-Zuyevo
        </a>
      </p></div>
  </section>
</template>

<script>
  export default {
    name: 'About',
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .about {
    margin-top: 100px;

    &__title {
      text-align: center;
      margin-bottom: 10px;

      &--small {
        margin-top: 40px;
        margin-bottom: 20px;
        color: @color-main;
        font-size: 20px;
        text-align: left;
        padding-left: 20px;
      }
    }

    &__text {
      font-size: 18px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      background-color: #ffffff;
      line-height: 24px;
      color: #1d1d1d;
      margin-bottom: 20px;
      text-align: left;
      padding: 0 20px;
    }

    &__list {
      padding: 0 20px;
      margin-bottom: 20px;
    }

    &__item {
      margin-bottom: 5px;
      font-size: 18px;
      line-height: 25px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 700;
      padding-left: 20px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        display: block;
        background-color: @color-main;
        border-radius: 50%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &__desc {
      padding-left: 20px;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__degree,
    &__date {
      font-size: 18px;
      line-height: 25px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 700;
    }

    &__link {
      font-size: 18px;
      line-height: 25px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      color: @color-text;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        opacity: 0.8;
      }
    }

    @media @screen-sm {
      &__text,
      &__item,
      &__date,
      &__degree,
      &__link {
        font-size: 20px;
        line-height: 30px;
      }

      &__title {
        &--small {
          font-size: 25px;
        }
      }

    }

    @media @screen-md {
      &__title {
        margin-bottom: 100px;

        &--small {
          font-size: 30px;
          margin-bottom: 20px;
        }
      }
    }

  }


</style>

<template>
  <section class="about" id="about"><h3 class="about__title title">About me</h3>
    <p class="about__text">I'm a positive and friendly person. Also, I love to set goals and achieve them. My
      important qualities: self-motivated, ability overcome difficulties and the ability to learn. These skills help
      me along the way:</p>
    <ul class="about__list">
      <li class="about__item">HTML 5</li>
      <li class="about__item">CSS 3</li>
      <li class="about__item">JavaScript (ES5, ES6)</li>
      <li class="about__item">JQuery</li>
      <li class="about__item">LESS</li>
      <li class="about__item">Git</li>
      <li class="about__item">Gulp</li>
      <li class="about__item">Cross-browser markup</li>
      <li class="about__item">BEM-like naming and code organization</li>
      <li class="about__item">Photoshop and Avocode</li>
    </ul>
    <p class="about__text">I create crossbrowser responsive HTML page layouts and make it live using JavaScript.</p>
    <p class="about__text">I can help you with converting website design to HTML templates, with developing frontend
      for your project and with optimizing existing code.</p>
    <p class="about__text">All the things: responsive, adaptive, mobile-first.</p>
    <p class="about__text">By default support IE10+, Edge, and modern version of Chrome, Mozilla Firefox, Opera,
      Safari.</p>
    <p class="about__text">All that depends on me must works fast. Css-sprites, svg symbols, responsive images,
      efficient code, optimization and minification. Clean markup reach 90+ on Google Tests.</p>
    <p class="about__text">I have some backend programming experience and think as a backend programmer will think
      when working with my code.</p> <h4 class="about__title about__title--small title">Education</h4>
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

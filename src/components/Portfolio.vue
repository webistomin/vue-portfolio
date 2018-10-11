<template>
  <section class="portfolio" id="portfolio">
    <h3 class="portfolio__title title">Portfolio</h3>
    <ul class="portfolio__list">
      <li class="portfolio__item portfolio__item--blue" tabindex="0">
        <figure class="portfolio__figure">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/movie-desktop.webp 1x,
                    ../../static/img/portfolio/movie-desktop@2x.webp 2x">
            <source type="image/webp" media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/movie-tablet.webp 1x,
                    ../../static/img/portfolio/movie-tablet@2x.webp 2x">
            <source type="image/webp" media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/movie-mobile.webp 1x,
                    ../../static/img/portfolio/movie-mobile@2x.webp 2x">
            <source media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/movie-desktop.jpg 1x,
                    ../../static/img/portfolio/movie-desktop@2x.jpg 2x">
            <source media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/movie-tablet.jpg 1x,
                    ../../static/img/portfolio/movie-tablet@2x.jpg 2x">
            <source media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/movie-mobile.jpg 1x,
                    ../../static/img/portfolio/movie-mobile@2x.jpg 2x">
            <img src="../../static/img/portfolio/movie-mobile.jpg"
                 alt="Movie App" class="portfolio__pic">
          </picture>
          <figcaption class="portfolio__caption portfolio__caption--white portfolio__caption--black">Project "Movie App"
          </figcaption>
        </figure>
        <div class="portfolio__buttons">
          <a href="https://vuejs-movie-app.firebaseapp.com/" class="portfolio__link btn" target="_blank"
             rel="noopener noreferrer">Live Demo</a>
          <a href="https://github.com/webistomin/vuejs-movie-app"
             class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            View source</a>
        </div>
      </li>
      <li class="portfolio__item portfolio__item--top" tabindex="0">
        <figure class="portfolio__figure">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/weather-desktop.webp 1x,
                    ../../static/img/portfolio/weather-desktop@2x.webp 2x">
            <source type="image/webp" media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/weather-tablet.webp 1x,
                    ../../static/img/portfolio/weather-tablet@2x.webp 2x">
            <source type="image/webp" media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/weather-mobile.webp 1x,
                    ../../static/img/portfolio/weather-mobile@2x.webp 2x">
            <source media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/weather-desktop.jpg 1x,
                    ../../static/img/portfolio/weather-desktop@2x.jpg 2x">
            <source media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/weather-tablet.jpg 1x,
                    ../../static/img/portfolio/weather-tablet@2x.jpg 2x">
            <source media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/brume-mobile.jpg 1x,
                    ../../static/img/portfolio/weather-mobile@2x.jpg 2x">
            <img src="../../static/img/portfolio/weather-mobile.jpg" alt="Weather App" class="portfolio__pic">
          </picture>
          <figcaption class="portfolio__caption portfolio__caption--white">Project "Weather App"</figcaption>
        </figure>
        <div class="portfolio__buttons">
          <a href="https://vuejs-weather-app-32dde.firebaseapp.com/"
             class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            Live Demo</a>
          <a href="https://github.com/webistomin/vuejs-weather-app"
             class="portfolio__link btn" target="_blank"
             rel="noopener noreferrer">
            View source</a>
        </div>
      </li>
      <li class="portfolio__item portfolio__item--margin" tabindex="0">
        <figure class="portfolio__figure">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/table-desktop.webp 1x, ../../static/img/portfolio/table-desktop@2x.webp 2x">
            <source type="image/webp" media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/table-tablet.webp 1x, ../../static/img/portfolio/table-tablet@2x.webp 2x">
            <source type="image/webp" media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/table-mobile.webp 1x, ../../static/img/portfolio/table-mobile@2x.webp 2x">
            <source media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/table-desktop.jpg 1x, ../../static/img/portfolio/table-desktop@2x.jpg 2x">
            <source media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/table-tablet.jpg 1x, ../../static/img/portfolio/table-tablet@2x.jpg 2x">
            <source media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/table-mobile.jpg 1x, ../../static/img/portfolio/table-mobile@2x.jpg 2x">
            <img data-src="../../static/img/portfolio/table-mobile.jpg" alt="Table component" class="portfolio__pic">
          </picture>
          <figcaption class="portfolio__caption portfolio__caption--white">Project "Table Component"</figcaption>
        </figure>
        <div class="portfolio__buttons">
          <a href="https://vuejs-table-component.firebaseapp.com/"
             class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            Live Demo</a>
          <a href="https://github.com/webistomin/vuejs-table-component" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            View source</a>
        </div>
      </li>
      <li class="portfolio__item" tabindex="0">
        <figure class="portfolio__figure">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/sport-desktop.webp 1x,
                    ../../static/img/portfolio/sport-desktop@2x.webp 2x">
            <source type="image/webp" media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/sport-tablet.webp 1x,
                    ../../static/img/portfolio/sport-tablet@2x.webp 2x">
            <source type="image/webp" media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/sport-mobile.webp 1x,
                    ../../static/img/portfolio/sport-mobile@2x.webp 2x">
            <source media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/sport-desktop.jpg 1x,
                    ../../static/img/portfolio/sport-desktop@2x.jpg 2x">
            <source media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/sport-tablet.jpg 1x,
                    ../../static/img/portfolio/sport-tablet@2x.jpg 2x">
            <source media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/sport-mobile.jpg 1x,
                    ../../static/img/portfolio/sport-mobile@2x.jpg 2x">
            <img src="../../static/img/portfolio/sport-mobile.jpg" alt="sport" class="portfolio__pic">
          </picture>
          <figcaption class="portfolio__caption portfolio__caption--white">Project "Sport store"</figcaption>
        </figure>
        <div class="portfolio__buttons">
          <a href="http://ishop.mcdir.ru/"
             class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            Live Demo</a>
          <a href="https://github.com/webistomin/my-shop" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">View source</a>
        </div>
      </li>
      <li class="portfolio__item portfolio__item--margin" tabindex="0">
        <figure class="portfolio__figure">
          <picture>
            <source type="image/webp" media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/brume-desktop.webp 1x,
                    ../../static/img/portfolio/brume-desktop@2x.webp 2x">
            <source type="image/webp" media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/brume-tablet.webp 1x,
                    ../../static/img/portfolio/brume-tablet@2x.webp 2x">
            <source type="image/webp" media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/brume-mobile.webp 1x,
                    ../../static/img/portfolio/brume-mobile@2x.webp 2x">
            <source media="(min-width: 1200px)"
                    srcset="../../static/img/portfolio/brume-desktop.jpg 1x,
                    ../../static/img/portfolio/brume-desktop@2x.jpg 2x">
            <source media="(min-width: 992px)"
                    srcset="../../static/img/portfolio/brume-tablet.jpg 1x,
                    ../../static/img/portfolio/brume-tablet@2x.jpg 2x">
            <source media="(min-width: 320px)"
                    srcset="../../static/img/portfolio/brume-mobile.jpg 1x,
                    ../../static/img/portfolio/brume-mobile@2x.jpg 2x">
            <img src="../../static/img/portfolio/brume-mobile.jpg" alt="brume" class="portfolio__pic">
          </picture>
          <figcaption class="portfolio__caption portfolio__caption--white">Project "Brume"</figcaption>
        </figure>
        <div class="portfolio__buttons">
          <a href="https://webistomin.github.io/brume-adaptive/"
             class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href="https://github.com/webistomin/brume-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">View source</a>
        </div>
      </li>
    </ul>
    <a href="projects.html" class="portfolio__link btn">View all projects</a></section>
</template>

<script>
  export default {
    name: 'Portfolio',
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .portfolio {
    margin-top: 100px;

    &__title {
      text-align: center;
      margin-bottom: 10px;
    }

    &__pic {
      opacity: 0.95;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: scale3d(1.05, 1.05, 1);
      transform: scale3d(1.05, 1.05, 1);
      vertical-align: top;
      width: 100%;
    }

    &__list {
      margin-bottom: 40px;
    }

    &__item {
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover .portfolio__buttons,
      &:focus .portfolio__buttons {
        transform-origin: top;
        transform: scaleY(1);
        transition: transform 0.3s ease-in-out;
      }
    }

    &__figure {
      position: relative;
      margin: 0;
    }

    &__caption {
      width: 100%;
      text-align: center;
      display: block;
      position: absolute;
      font-size: 18px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      padding: 20px 0;
      bottom: 0;
      color: #ffffff;
      background-color: @color-text;
    }

    &__buttons {
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
    }

    &__link {
      margin: 0 auto;
      position: relative;
      color: #ffffff;
      background-color: @color-main;
      transition: all 0.3s ease-in-out;
      transform: translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      transition-duration: 0.3s;
      transition-property: transform;

      &--margin {
        margin-top: 100px;
      }

      &:hover,
      &:focus {
        transform: scale(1.1);
      }

      &:first-of-type {
        margin-bottom: 20px;
      }

      &:active {
        transform: scale(0.8);
        transition: all 0.3s;
      }

    }

    @media @screen-md {
      position: relative;

      &__figure {
        height: 100%;
      }

      &__title {
        position: absolute;
        line-height: initial;
        top: -22px;
        right: 0;
        margin: 0;

        &::before {
          width: 100%;
          height: 3px;
          background-color: @color-main;
          display: block;
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }

      &__pic {
        transform: none;
      }

      &__list {
        display: flex;
        flex-wrap: wrap;
        padding-left: 80px;
        overflow: visible;
        justify-content: space-between;
        margin-bottom: 200px;
      }

      &__item {
        position: relative;
        margin: 0;
        margin-bottom: 130px;
        width: 390px;
        height: 480px;
        background-color: #f1f2f4;
        box-shadow: -21px 22px 40px 0px rgba(0, 0, 0, 0.2);
        overflow: visible;

        &--blue {
          &::before {
            width: 100%;
            height: 100%;
            content: "";
            position: absolute;
            background-color: #000eed;
            z-index: -1;
            top: 72px;
            left: -60px;
          }
        }

        &--margin {
          margin-top: -240px;
        }

        &--top {
          margin-top: 240px;
        }

        &:nth-child(odd) {
          margin-right: 80px;
        }
      }

      &__caption {
        bottom: -64px;
        background-color: transparent;
        text-align: center;
        font-size: 20px;

        &--white {
          background-color: #ffffff;
          color: @color-text;
        }
      }
    }

    @media @screen-lg {
      &__item {
        width: 480px;
      }

      &__caption {
        text-align: center;
        background-color: #1d1d1d;
        color: #ffffff;

        &--black {
          background-color: #ffffff;
          color: @color-text;
        }
      }
    }
  }

</style>

<template>
  <section class="intro">
    <div class="intro__column intro__column--margin">
      <figure class="intro__figure">
        <img src="../../static/img/me.jpg" alt="Alexey Istomin" class="intro__img" width="552" height="628">
        <figcaption class="intro__caption">Love Vue.js, seriously!</figcaption>
      </figure>
    </div>
    <div class="intro__column intro__column--padding">
      <h2 class="intro__title title">{{ $t("intro.title") }}</h2>
      <p class="intro__text">{{ $t("intro.text") }}</p>
      <a href="#contacts" class="intro__link btn">{{ $t("intro.link") }}</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .intro {
    margin-top: 20px;

    &__figure {
      position: relative;
      margin: 0;
      margin-bottom: 20px;
      text-align: center;
    }

    &__column {
      &--margin {
        max-width: 300px;
        margin: 0 auto;
      }
    }

    &__img {
      vertical-align: top;
    }

    &__caption {
      width: 300px;
      text-align: center;
      display: none;
      position: absolute;
      font-size: 18px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      background-color: #ffffff;
      padding: 20px 0;
      bottom: 0;
    }

    &__title {
      margin-bottom: 10px;
      background-color: #ffffff;
      color: #1d1d1d;
      text-align: center;
    }

    &__text {
      font-size: 18px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      background-color: #ffffff;
      line-height: 24px;
      color: @color-text;
      margin-bottom: 28px;
      text-align: center;
      padding: 0 20px;
    }

    &__link {
      margin: 0 auto;
      position: relative;
      background-color: transparent;
      color: @color-main;
      border: 2px solid @color-main;
      transition: all 0.3s;
      overflow: hidden;

      &:active {
        transform: scale(0.8);
        transition: all 0.3s;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000fff;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        transition: 0.3s ease-in-out;
        z-index: -1;
      }

      &:hover,
      &:focus {
        color: #ffffff;

        &::before {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
    }

    @media @screen-sm {
    &__text {
      font-size: 20px;
      line-height: 30px;
    }
  }

    @media @screen-md {
    display: flex;
    padding-bottom: 125px;
    z-index: 2;
    position: relative;

    &__column {
      margin-left: 40px;

      &--margin {
        margin-left: 150px;
        flex-shrink: 0;
      }
    }

    &__caption {
      display: block;
      left: -80px;
    }

    &__title {
      text-align: left;
      width: max-content;
    }

    &__text {
      padding: 0;
      text-align: left;
    }

    @-webkit-keyframes criss-cross-left {
      0% {
        left: -20px;
      }
      50% {
        left: 50%;
        width: 20px;
        height: 20px;
      }
      100% {
        left: 50%;
        width: 375px;
        height: 375px;
      }
    }

    @keyframes criss-cross-left {
      0% {
        left: -20px;
      }
      50% {
        left: 50%;
        width: 20px;
        height: 20px;
      }
      100% {
        left: 50%;
        width: 375px;
        height: 375px;
      }
    }
    @-webkit-keyframes criss-cross-right {
      0% {
        right: -20px;
      }
      50% {
        right: 50%;
        width: 20px;
        height: 20px;
      }
      100% {
        right: 50%;
        width: 375px;
        height: 375px;
      }
    }
    @keyframes criss-cross-right {
      0% {
        right: -20px;
      }
      50% {
        right: 50%;
        width: 20px;
        height: 20px;
      }
      100% {
        right: 50%;
        width: 375px;
        height: 375px;
      }
    }

    &__link {
      position: relative;
      margin: 0;
      background-color: #ffffff;
      color: @color-main;

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        content: '';
        width: 20px;
        height: 20px;
        background-color: @color-main;
        border-radius: 50%;
        box-sizing: border-box;
        transition: 0.6s ease-in-out;

      }

      &::before {
        left: -20px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      &::after {
        right: -20px;
        -webkit-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
      }
      &:hover,
      &:focus {
        color: #ffffff;
        background-color: transparent;
      }
      &:hover::before,
      &:focus::before{
        -webkit-animation: criss-cross-left 0.4s both;
        animation: criss-cross-left 0.6s both;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        z-index: -1;
      }
      &:hover::after,
      &:focus::after {
        -webkit-animation: criss-cross-right 0.4s both;
        animation: criss-cross-right 0.6s both;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        z-index: -1;
      }

    }
  }

    @media @screen-lg {
    padding-bottom: 200px;

    &__column {
      &--margin {
        margin: 0;
        margin-left: 125px;
        max-width: 500px;
      }

      &--padding {
        padding-top: 110px;
      }
    }

    &__title {
      margin-bottom: 0 !important;
    }

    &__text {
      margin-bottom: 25px;
      max-width: 500px;
    }

    &__caption {
      bottom: 30px;
    }
  }

    @media @screen-lg-max {
    padding-bottom: 214px;

    &__column {

      &--margin {
        margin-left: 90px;
      }
    }

    &__title {
      margin-top: 160px;
    }

    &__caption {
      bottom: 30px;
    }
  }

  }
</style>

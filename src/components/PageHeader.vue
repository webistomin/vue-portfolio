<template>
  <header class="page-header">
    <div class="page-header__inner">
      <div class="page-header__links">
        <a href="/ru/index.html"
           class="page-header__link page-header__link--ru"
           title="Russian version">RU</a>
        /
        <a href="javascript:void(0);"
           class="page-header__link page-header__link--active page-header__link--en"
           title="English version">EN</a>
      </div>
      <div class="page-header__logotype">
        <h1 class="page-header__logo">Istomin.</h1>
        <span class="page-header__desc">Frontend developer</span>
      </div>
      <button class="page-header__toggle" type="button" tabindex="0">
        Open menu
        <span class="page-header__line"></span>
        <span class="page-header__line"></span>
        <span class="page-header__line"></span>
      </button>
      <nav class="main-nav main-nav--closed">
        <ul class="main-nav__list">
          <li class="main-nav__item">
            <a href="#about" class="main-nav__link">About me</a>
          </li>
          <li class="main-nav__item">
            <a href="#portfolio" class="main-nav__link">Portfolio</a>
          </li>
          <li class="main-nav__item">
            <a href="#contacts" class="main-nav__link">Contacts</a>
          </li>
        </ul>
      </nav>
      <section class="socials socials--hidden">
        <ul class="socials__list socials__list--justify">
          <li class="socials__item socials__item--square">
            <a href="https://t.me/webistomin" class="socials__link"
               target="_blank" rel="noopener noreferrer" title="Telegram">
              <svg class="socials__icon socials__icon--rotate" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item socials__item--square">
            <a href="https://vk.com/webistomin" class="socials__link"
               target="_blank" rel="noopener noreferrer" title="VK">
              <svg class="socials__icon socials__icon--rotate" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="socials__item socials__item--square">
            <a href="https://www.linkedin.com/in/webistomin/"
               class="socials__link" target="_blank"
               rel="noopener noreferrer" title="LinkedIn">
              <svg class="socials__icon socials__icon--rotate" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div class="container">
      <intro></intro>
    </div>
  </header>
</template>

<script>
  import Intro from './Intro';

  export default {
    name: 'PageHeader',
    components: {
      Intro,
    },
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .page-header {
    position: relative;

    &--blue {
      background-image: none;
    }

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 65px;
      background-color: @color-main;
      z-index: -1;
    }

    &__logo {
      margin: 0;
      font-family: 'Oswald', sans-serif;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      color: #ffffff;
      font-size: 25px;
      text-align: center;

      &::selection {
        background-color: #ffffff;
        color: #1d1d1d;
      }
    }

    &__home {
      outline: none;
    }

    &__desc {
      display: block;
      margin-top: -5px;
      font-size: 8px;
      color: #ffffff;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;

      &::selection {
        background-color: #ffffff;
        color: #1d1d1d;
      }
    }

    &__link {
      position: relative;
      font-family: 'Oswald', sans-serif;
      font-size: 0.8125em;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: #ffffff;

      &--active {
        &::before {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -2px;
          left: -1px;
          background-color: #ffffff;
        }
      }
    }

    &__links {
      color: #ffffff;
    }

    &__inner {
      padding: 10px 2.604166667%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--blue {
        background-color: @color-main;
      }
    }

    &__toggle {
      box-sizing: border-box;
      font-size: 0;
      background-color: transparent;
      border: none;
      width: 40px;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &--opened .page-header__line {
        &:nth-child(1) {
          transform: rotate(45deg) translate(8px, 7px);
        }

        &:nth-child(2) {
          visibility: hidden;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }
      }
    }

    &__line {
      display: block;
      height: 1px;
      width: 45px;
      background: #ffffff;
      margin: 5px auto;
      transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @media @screen-sm {
      &::before {
        height: 75px;
      }

      &__logotype {
        &--padding {
          padding-right: 50px;
        }
      }

      &__logo {
        font-size: 30px;
      }

      &__desc {
        margin-top: -4px;
        font-size: 10px;
      }

      &__link {
        padding: 10px;

        &--projects {
          padding: 0 10px;
        }
      }
    }

    @media @screen-md {
      &::before {
        width: 320px;
        height: 100%;
        z-index: 1;
      }

      background-image: url("../../static/img/pattern.png");
      background-repeat: repeat;

      &--blue {
        background-image: none;
        background-color: @color-main;
      }

      @media (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi) {
        background-image: url("../../static/img/pattern@2x.png");
        background-size: 64px 120px;
      }


      &__logo {
        font-size: 64px;
      }

      &__desc {
        margin-top: -8px;
        font-size: 12px;
      }

      &__toggle {
        display: none;
      }

      &__inner {
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;

        &--blue {
          padding-bottom: 100px;
          background-image: none;
          background-color: @color-main;
        }
      }

      &__logotype {
        margin-right: 25px;
        z-index: 2;

        &--padding {
          margin-right: 0;
          padding-right: 0;
        }
      }

      &__links {
        display: flex;
        width: 70px;
        justify-content: space-between;
        z-index: 1;
        position: absolute;
        bottom: -40px;
        font-size: 0;

        &--high {
          bottom: 50px;
        }
      }

      &__link {
        display: block;
        width: 30px;
        height: 20px;
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;

        &:hover {
          transform: scale(1.1);
          transition: all 0.1s ease-in-out;
        }

        &:active {
          transform: scale(0.9);
          transition: all 0.1s ease-in-out;

        }

        &--active {
          &::before {
            bottom: -8px;
          }
        }

        &--ru {
          background: linear-gradient(-180deg, white 33.3%, mediumblue 33.3%, mediumblue 66.6%, red 66.6%);
        }

        &--en {
          background: linear-gradient(90deg, transparent 46%, red 46%, red 56%, transparent 56%), linear-gradient(transparent 38%, white 38%, white 42%, red 42%, red 58%, white 58%, white 62%, transparent 62%), linear-gradient(90deg, transparent 44%, white 44%, white 46%, red 46%, red 56%, white 56%, white 58%, transparent 58%), linear-gradient(33deg, transparent 45%, white 45%, white 48%, red 48%, red 54%, white 54%, white 57%, transparent 57%), linear-gradient(-33deg, mediumblue 45%, white 45%, white 48%, red 48%, red 54%, white 54%, white 57%, mediumblue 57%);
        }
      }

    }

    @media @screen-lg {
      &__logotype {
        margin-right: auto;
      }

      &__links {
        width: 100px;
      }

      &__link {
        width: 40px;
        height: 25px;
      }
    }

    @media @screen-lg-max {
      &::before {
        width: 590px;
      }

      &__inner {
        padding-top: 20px;
        padding-bottom: 20px;

        &--blue {
          padding-bottom: 100px;
        }
      }
    }
  }

  .main-nav {
    position: absolute;
    top: 105%;
    left: 0;
    z-index: 10;
    width: 100%;

    &--closed {
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s ease-in-out;
    }

    &--opened {
      transform-origin: top;
      transform: scaleY(1);
      transition: transform 0.3s ease-in-out;
    }

    &__item {
      text-align: center;
      background-color: #ffffff;

      &:hover {
        background-color: @color-text;
      }
    }

    &__link {
      display: block;
      padding: 22px 0 21px 0;
      font-size: 0.8125em;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: @color-text;

      &:hover {
        color: #ffffff;
      }
    }

    @media @screen-md {
      &--closed {
        transform: none;
        transform-origin: initial;
        position: relative;
        width: auto;
        top: initial;
        left: initial;
      }

      &__list {
        display: flex;
      }

      &__item {
        border: 1px solid #ffffff;

        &:hover {
          border-color: @color-main;
          background-color: #ffffff;
          box-shadow: 4px 3px 0px 0px rgba(0, 0, 255, 1);
          z-index: 10;
        }

        &--blue {
          border: none;
          background-color: transparent;

          &:hover {
            border-color: #ffffff;
            background-color: #ffffff;
            box-shadow: 4px 3px 0px 0px rgba(255, 255, 255, 0.5);
            z-index: 10;
          }
        }

        &:active {
          transform: translateX(4px) translateY(3px);
          box-shadow: none;
        }
      }

      &__link {
        padding: 7px 15px;

        &--white {
          color: #ffffff;

          &:hover {
            color: #ffffff;
          }
        }

        &:hover {
          color: #2f00fb;
        }

        &:focus {
          outline: thin dotted
        }
      }
    }

    @media @screen-lg {
      &__item {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }

      &__link {
        padding: 14px 30px;
      }
    }

    @media @screen-lg-max {
      &--closed {
        padding-left: 174px;
      }

      &--padding {
        padding-left: 0;
      }
    }
  }

  .socials {
    margin-bottom: 40px;

    &--hidden {
      display: none;
    }

    &__list {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    &__link {
      display: block;
    }

    &__item {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__icon {
      vertical-align: top;
      fill: @color-grey;

      &--blue {
        fill: @color-main;

        &:hover {
          fill: @color-main;
        }
      }

      &:hover {
        fill: @color-main;
      }
    }

    @media @screen-md {
      &--hidden {
        margin: 0;
      }

      @-webkit-keyframes rescale{
        0% {transform:rotate(0deg);}
        10% {transform:rotate(36deg);}
        20% {transform:rotate(72deg);}
        30% {transform:rotate(108deg);}
        40% {transform:rotate(144deg);}
        50% {transform:rotate(180deg);}
        60% {transform:rotate(216deg);}
        70% {transform:rotate(252deg);}
        80% {transform:rotate(288deg);}
        90% {transform:rotate(334deg);}
        100% {transform:rotate(360deg);}
      }

      @keyframes rescale{
        0% {transform:rotate(0deg);}
        10% {transform:rotate(36deg);}
        20% {transform:rotate(72deg);}
        30% {transform:rotate(108deg);}
        40% {transform:rotate(144deg);}
        50% {transform:rotate(180deg);}
        60% {transform:rotate(216deg);}
        70% {transform:rotate(252deg);}
        80% {transform:rotate(288deg);}
        90% {transform:rotate(334deg);}
        100% {transform:rotate(360deg);}
      }

      &--hidden {
        display: block;
      }

      &__list {
        justify-content: flex-start;

        &--justify {
          width: 210px;
          justify-content: space-between;
        }
      }

      &__item {
        &--square {
          width: 50px;
          height: 50px;
          background-color: @color-main;
          transform: rotate(45deg);

          &:hover {
            -webkit-animation:rescale 0.25s ease;
            animation: rescale 0.25s ease;
          }

          &:hover .socials__icon--rotate {
            fill: #ffffff;
          }

          &:hover .socials__icon--blue {
            fill: @color-main;
          }
        }

        &--white {
          background-color: #ffffff;
        }


      }

      &__link {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__icon {
        &--rotate {
          fill: #ffffff;
          transform: rotate(-45deg);

        }

        &--blue {
          fill: @color-main;

          &:hover {
            fill: @color-main;
          }
        }
      }
    }

    @media @screen-lg {
      margin-left: auto;
    }
  }
</style>

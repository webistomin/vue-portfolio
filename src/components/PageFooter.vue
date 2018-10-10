<template>
  <footer class="page-footer">
    <div class="container">
      <section class="contacts" id="contacts">
        <div class="contacts__column">
          <h3 class="contacts__title title">Contacts</h3>
          <section class="socials">
            <ul class="socials__list">
              <li class="socials__item">
                <a href="https://t.me/webistomin" class="socials__link" target="_blank"
                   rel="noopener noreferrer" title="Telegram">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-telegram"></use>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a href="https://vk.com/webistomin" class="socials__link" target="_blank"
                   rel="noopener noreferrer" title="VK">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-vk"></use>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a href="https://www.facebook.com/webistomin" class="socials__link"
                   target="_blank" rel="noopener noreferrer" title="Facebook">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a href="https://linkedin.com/in/webistomin" class="socials__link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a href="https://github.com/webistomin" class="socials__link" target="_blank"
                   rel="noopener noreferrer" title="GitHub">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </section>
          <div class="contacts__info"><span class="contacts__desc">E-mail</span> <a
            href="mailto:istomin.working@gmail.com" class="contacts__link">istomin.working@gmail.com</a></div>
          <div class="contacts__info"><span class="contacts__desc">Skype</span> <a
            href="https://join.skype.com/invite/PEQX2bCxW3pW" class="contacts__link" target="_blank"
            rel="noopener noreferrer">+79996135062</a></div>
          <div class="contacts__info"><span class="contacts__desc">CV</span> <a href="https://hh.ru/resume/836ce1d3ff057cecc70039ed1f566a68623142"
                                                                                class="contacts__link" target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                title="HeadHunter">Alexey Istomin (hh.ru)</a>
          </div>
        </div>
        <div class="contacts__column contacts__column--margin">
          <form action="" method="get" class="contacts__field"><h4 class="contacts__title contacts__title--small title">
            Thanks</h4>
            <p class="contacts__text">You’ve just spent <span id="minutes"></span> minutes and <span id="seconds"></span>
              seconds looking at my homepage. Time is the most important thing we have, and unfortunately you will never
              get it back, so thank you very much for sharing it with me. Please feel free to contact me for freelance
              projects and collaboration.</p>
            <div class="group"><input class="inputMaterial" type="text" value="" id="name" name="name" required
                                      autocomplete="name" onkeyup="this.setAttribute('value', this.value);"> <span
              class="highlight"></span> <span class="bar"></span> <label for="name">Your name</label></div>
            <div class="group"><input class="inputMaterial" type="email" value="" id="email" name="email" required
                                      onkeyup="this.setAttribute('value', this.value);" autocomplete="email"> <span
              class="highlight"></span> <span class="bar"></span> <label for="email">Your e-mail</label></div>
            <div class="group"><textarea name="message" cols="10" id="message" rows="3" class="inputMaterial" required
                                         onkeyup="this.setAttribute('value', this.value);"></textarea> <span
              class="highlight"></span> <span class="bar"></span> <label for="message">Your message</label></div>
            <button class="contacts__btn btn" id="contact-submit" type="submit"><span class="contacts__btn-text"
                                                                                      id="btn-text">Send</span>
              <svg class="contacts__icon" id="plane-btn" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-plane"></use>
              </svg>
              <svg class="contacts__icon contacts__icon--hidden contacts__icon--absolute" id="plane-btn-absolute"
                   width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-plane"></use>
              </svg>
            </button>
          </form>
        </div>
      </section>
      <section class="copyright"><p class="copyright__text">©2018 ALL RIGHTS RESERVED. Alexey Istomin - junior frontend
        developer based in Russia. </p></section>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'PageFooter',
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .page-footer {
    margin-top: 100px;
    background-color: #f1f2f4;

    @media @screen-md {
      margin-top: 200px;
    }
  }

  .contacts {
    padding-top: 40px;

    &__title {
      text-align: center;
      margin-bottom: 40px;

      &--small {
        color: #ffffff;
        font-size: 20px;

        &::selection {
          background-color: #ffffff;
          color: #1d1d1d;
        }
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__desc {
      font-family: 'Oswald', sans-serif;
      font-style: normal;
      font-weight: 700;
      color: @color-grey;
      font-size: 20px;
      text-transform: uppercase;
    }

    &__link {
      font-size: 17px;
      color: @color-text;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }

    }

    &__text {
      font-size: 17px;
      line-height: 24px;
      text-align: justify;
      color: #ffffff;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 40px;

      &::selection {
        background-color: #ffffff;
        color: #1d1d1d;
      }

      & span {
        &::selection {
          background-color: #ffffff;
          color: #1d1d1d;
        }
      }

    }

    &__inner {
      display: flex;
      flex-wrap: wrap;
    }

    &__column {
      &:first-of-type {
        margin-bottom: 40px;
      }
    }

    &__input {
      box-sizing: border-box;
      width: 100%;
      position: relative;
      font-size: 17px;
      color: #ffffff;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      background-color: transparent;
      padding: 11px 0;
      border: none;
      border-bottom: 2px solid #ffffff;
      //outline-color: #ffffff;
      margin-bottom: 20px;
      outline: none;

      &:last-child {
        margin-bottom: 0;
      }

      &::placeholder {
        color: #ffffff;
      }
    }

    &__message {
      width: 100%;
      border: none;
      border-bottom: 2px solid #ffffff;
      //outline-color: #ffffff;
      background-color: transparent;
      min-height: 76px;
      color: #ffffff;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-size: 17px;
      font-weight: 400;
      margin-bottom: 40px;
      outline: none;
      resize: none;

      &::placeholder {
        color: #ffffff;
      }
    }

    &__field {
      background-color: @color-main;
      padding: 40px;
      box-shadow: -21px 22px 40px 0px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    &__icon {
      margin-left: 10px;
      fill: #000fff;

      &--hidden {
        display: none;
      }

      &--visible {
        display: block;
      }

      &--absolute {
        fill: #ffffff;
        position: absolute;
        right: 18px;
      }
    }

    .fade {
      -webkit-animation: fade 2s;
      animation: fade 2s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }

    .fly {
      position: absolute;
      -webkit-animation-name: a;
      animation-name: a;
      -webkit-animation-duration: 10s;
      animation-duration: 10s;
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }

    @-webkit-keyframes fade {
      0% {
        color: transparent;
      }
      100% {
        color: #ffffff;
      }
    }
    @keyframes fade {
      0% {
        color: transparent;
      }
      100% {
        color: #000fff;
      }
    }
    @-webkit-keyframes a {
      0% {
        top: 10px;
        left: 80px;
      }
      4% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        top: -10000px;
        left: 10000px;
        -webkit-transform: rotate(13360deg);
        transform: rotate(13360deg);
      }
    }

    @keyframes a {
      0% {
        top: 10px;
        left: 80px;
      }
      4% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        top: -10000px;
        left: 10000px;
        -webkit-transform: rotate(13360deg);
        transform: rotate(13360deg);
      }
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      color: @color-main;
      width: 100%;
      border: none;
      margin: 0 auto;
      position: relative;
      transition: all 0.3s ease-in-out;
      transform: translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      transition-duration: 0.3s;
      transition-property: transform;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.8);
        transition: all 0.3s;
      }

    }

    @media @screen-sm {
      &__title {
        &--small {
          font-size: 25px;
        }
      }

      &__input,
      &__message {
        font-size: 20px;
      }

      &__text {
        font-size: 20px;
        line-height: 30px;
      }
    }

    @media @screen-md {
      display: flex;

      &__title {
        margin-bottom: 20px;
      }

      &__column {

        &:first-of-type {
          margin-right: 100px;
        }

        &--margin {
          margin-top: -100px;
        }
      }

      &__btn {
        width: 210px;
        margin: 0;
      }
    }

    @media @screen-lg {
      justify-content: space-between;

      &__column {
        &--margin {
          width: 600px;
        }
      }
    }

    @media @screen-lg-max {
      &__column {
        &--margin {
          width: 480px;
        }
      }
    }

  }

  .copyright {
    padding: 40px 0;
    &__text {
      color: @color-text;
      text-align: center;
      font-size: 10px;
      line-height: 24px;
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
    }

    @media @screen-sm {
      &__text {
        font-size: 12px;
      }
    }

    @media @screen-md {
      padding-top: 80px;
    }
  }


</style>

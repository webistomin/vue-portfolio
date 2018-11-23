<template>
  <footer class="page-footer" role="contentinfo">
    <div class="container">
      <section class="contacts" id="contacts">
        <div class="contacts__column">
          <h3 class="contacts__title title">{{ $t('pageFooter.title') }}</h3>
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
                <a href="https://github.com/webistomin"
                   class="socials__link" target="_blank"
                   rel="noopener noreferrer" title="GitHub">
                  <svg class="socials__icon" width="25" height="25">
                    <use x="0" y="0" xlink:href="#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </section>
          <div class="contacts__info">
            <span class="contacts__desc">{{ $t('pageFooter.firstInfo') }}</span>
            <a href="mailto:istomin.working@gmail.com" class="contacts__link">
              istomin.working@gmail.com
            </a>
          </div>
          <div class="contacts__info">
            <span class="contacts__desc">{{ $t('pageFooter.secondInfo') }}</span>
            <a href="skype:live:49e0fc42cb1a2f1c?call"
               class="contacts__link" target="_blank"
            rel="noopener noreferrer">live:49e0fc42cb1a2f1c</a>
          </div>
          <div class="contacts__info">
            <span class="contacts__desc">{{ $t('pageFooter.thirdInfo') }}</span>
            <a href="https://hh.ru/resume/c9e34aa2ff05e9e6730039ed1f31514c637330"
               class="contacts__link" target="_blank" rel="noopener noreferrer"
               title="HeadHunter">{{ $t('pageFooter.name') }} (hh.ru)</a>
          </div>
        </div>
        <div class="contacts__column contacts__column--margin">
          <form action="https://formcarry.com/s/-WRDpzuUOMx" method="POST" class="contacts__field" accept-charset="UTF-8" @submit.prevent="submitForm">
            <h4 class="contacts__title contacts__title--small title">
            {{ $t('pageFooter.secondTitle') }}
            </h4>
            <p class="contacts__text" v-html="$t('pageFooter.text')">
            </p>
            <div class="group">
              <input class="inputMaterial" type="text"
                     id="name" name="name"
                     ref="inputName"
                     required autocomplete="name"
                     v-model.trim="name">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label for="name">{{ $t('pageFooter.firstLabel') }}</label>
            </div>
            <div class="group">
              <input class="inputMaterial" type="email"
                     ref="inputEmail"
                     id="email" name="email"
                     value=""
                     required v-model.trim="email"
                     autocomplete="email">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label for="email">{{ $t('pageFooter.secondLabel') }}</label>
            </div>
            <div class="group">
              <textarea name="message" cols="10" id="message"
                        ref="inputMessage"
                        rows="3" class="inputMaterial" required
                        v-model.trim="message">
              </textarea>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label for="message">{{ $t('pageFooter.thirdLabel') }}</label></div>
              <input type="hidden" name="_gotcha">
              <button class="contacts__btn btn" id="contact-submit"
                      type="submit" ref="submitBtn">
              <span class="contacts__btn-text" id="btn-text" ref="btnText">
                {{ $t('pageFooter.btn') }}
              </span>
              <svg class="contacts__icon" id="plane-btn" ref="planeBtn" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-plane"></use>
              </svg>
              <svg class="contacts__icon contacts__icon--hidden contacts__icon--absolute" id="plane-btn-absolute" ref="planeBtnAbsolute"
                   width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-plane"></use>
              </svg>
            </button>
          </form>
        </div>
      </section>
      <section class="copyright">
        <p class="copyright__text">{{ $t('pageFooter.copyright') }}</p>
      </section>
    </div>
  </footer>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    mounted() {
      const minutesLabel = document.getElementById('minutes');
      const secondsLabel = document.getElementById('seconds');
      let totalSeconds = 0;

      function pad(val) {
        const valString = `${val}`;
        if (valString.length < 2) {
          return `0${valString}`;
        }
        return valString;
      }

      function setTime() {
        totalSeconds += 1;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60, 10));
      }

      setInterval(setTime, 1000);
    },
    methods: {
      submitForm() {
        const nameInput = this.$refs.inputName;
        const emailInput = this.$refs.inputEmail;
        const messageInput = this.$refs.inputMessage;
        const btnText = this.$refs.btnText;
        const plane = this.$refs.planeBtn;
        const planeAbsolute = this.$refs.planeBtnAbsolute;

        axios.post('https://formcarry.com/s/-WRDpzuUOMx', { name: nameInput.value, email: emailInput.value, message: messageInput.value }, { headers: { Accept: 'application/json' } })
          .then(() => {
            planeAbsolute.classList.remove('contacts__icon--hidden');
            planeAbsolute.classList.add('contacts__icon--visible');
            planeAbsolute.classList.add('fly');
            btnText.classList.add('fade');
            btnText.innerHTML = this.$locale === 'ru' ? 'Отправлено' : 'Sent';
            plane.innerHTML = '<use x="0" y="0" xlink:href="#icon-check"></use>';
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    name: 'PageFooter',
  };
</script>

<style lang="less">
  @import '../assets/variables';
  @import '../assets/title';
  @import '../assets/btn';

  .page-footer {
    margin-top: 40px;
    background-color: #f1f2f4;

    @media @screen-md {
      margin-top: 200px;
    }
  }

  .contacts {
    padding-top: 40px;

    &__title {
      text-align: center;
      margin-bottom: 30px;

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
      user-select: none;

      &:hover,
      &:focus {
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
      padding-top: 30px;

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

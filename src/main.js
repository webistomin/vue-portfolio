// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import './assets/fonts.less';
import './assets/variables.less';
import './assets/normalize.less';
import './assets/scaffolding.less';
import './assets/inputs.less';

Vue.use(VueI18n);

Vue.config.productionTip = false;

const messages = {
  en: {
    pageHeader: {
      desc: 'Frontend developer',
    },
    mainNav: {
      firstLink: 'About me',
      secondLink: 'Portfolio',
      thirdLink: 'Contacts',
    },
    intro: {
      title: 'Hello',
      text: 'My name is Alexey, I\'m a junior frontend developer, currently focusing on Vue.js',
      link: 'Hire me',
    },
    about: {
      title: 'About me',
      firstText: 'I create crossbrowser responsive HTML page layouts and make it live using native JavaScript or Vue.js framework.',
      secondText: 'I can help you with converting website design to HTML templates, developing frontend for your project and optimizing existing code.',
      thirdText: 'These skills help me along the way:',
      fourthText: 'All the things: responsive, adaptive, mobile-first.',
      fifthText: 'By default support Edge and modern version of Chrome, Mozilla Firefox, Opera, Safari.',
      sixthText: 'All that depends on me must works fast. Css-sprites, svg symbols, webp pictures, responsive images, efficient code, optimization and minification. Clean markup reach 90+ on Google Tests.',
      seventhText: 'I have some backend programming experience and think as a backend programmer will think when working with my code.',
    },
  },
  ru: {
    pageHeader: {
      desc: 'Фронтенд разработчик',
    },
    mainNav: {
      firstLink: 'Обо мне',
      secondLink: 'Портфолио',
      thirdLink: 'Контакты',
    },
    intro: {
      title: 'Привет',
      text: 'Меня зовут Алексей, я джуниор фронтенд разработчик. В настоящее время работаю с Vue.js',
      link: 'Написать мне',
    },
    about: {
      title: 'Обо мне',
      firstText: 'Я создаю кроссбраузерные, отзывчивые HTML интерфейсы и оживляю их с помощью нативного JavaScript или Vue.js',
      secondText: 'Я могу сверстать сайт из PSD или любого другого веб-дизайна, разработать фротенд для вашего проекта, а также оптимизировать существующую верстку.',
      thirdText: 'Мои навыки:',
      fourthText: 'Все разработанные сайты отзывчивые и адаптивные, с применением подхода Mobile First',
      fifthText: 'Обычно сайты корректо отображаются во всех современных браузерах (Chrome, Opera, Firefox, Safari, Edge). IE может дорабаваться отдельно.',
      sixthText: 'Все что зависит от меня стараюсь делать максимально быстрым. Применяю css и svg спрайты, изображения webp, минифицирую картинки, стили, скрипты и т.д. Разработанные сайты часто получают зеленую зону в Google Speed (90+)',
      seventhText: 'У меня есть небольшой опыт в разработке серверной части, поэтому стараюсь писать код, который смогут использовать бэкендеры.',
    },
  },
};

const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
});

Object.defineProperty(Vue.prototype, '$locale', {
  get() {
    return i18n.locale;
  },
  set(locale) {
    i18n.locale = locale;
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});

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
    message: {
      hello: 'Hello',
    },
  },
  ru: {
    message: {
      hello: 'Привет',
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

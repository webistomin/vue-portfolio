// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from './i18n/index';
import './assets/scroll';
import './assets/lazyload';
import './assets/fonts.less';
import './assets/variables.less';
import './assets/normalize.less';
import './assets/scaffolding.less';
import './assets/inputs.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});

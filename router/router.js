import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const interopDefault = (promise) => {
  return promise.then((m) => m.default || m);
};

const Main = () => interopDefault(import('~/views/Main.vue'));
const Portfolio = () => interopDefault(import('~/views/Portfolio.vue'));

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        path: '/portfolio',
        component: Portfolio,
      },
      {
        path: '/:lang/portfolio',
        component: Portfolio,
      },
      {
        path: '/:lang?',
        component: Main,
      },
    ],
  });
}

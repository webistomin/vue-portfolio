const pollyfils = [
  'Object.entries',
  'CustomEvent',
  'Array.from',
  'IntersectionObserver',
  'IntersectionObserverEntry',
  'Element.prototype.closest',
  'NodeList.prototype.forEach',
  'Array.prototype.forEach',
  'Node.prototype.contains',
].join('%2C');

export default {
  mode: 'universal',

  head: {
    htmlAttrs: {
      dir: 'ltr',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'date=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'google', content: 'notranslate' },
      { name: 'yandex-verification', content: 'e40d681c4b094086' },
      { name: 'google-site-verification', content: 'UnLetmkWA1WVaJxJ8jVdhGDunUX0B2-6b_qi2gA6iLs' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: `https://polyfill.io/v3/polyfill.min.js?features=${pollyfils}`, body: true }],
  },

  meta: {
    name: 'Алексей Истомин :: Фронтенд разработчик',
    author: 'webistomin',
    description:
      'webistom.in :: сайт-портфолио. Фронтенд разработчик из Москвы. Работаю с Vue.js/React.js. Мне нравится искать интересные решения, создавать невозможное при помощи CSS и реализовывать идеи в виде сайтов.',
    theme_color: '#000fff',
    lang: 'ru',
    ogTitle: 'Алексей Истомин :: Фронтенд разработчик',
    ogDescription:
      'webistom.in :: сайт-портфолио. Фронтенд разработчик из Москвы. Работаю с Vue.js/React.js. Мне нравится искать интересные решения, создавать невозможное при помощи CSS и реализовывать идеи в виде сайтов.',
    ogHost: 'http://webistom.in/',
    ogImage: `http://webistom.in/img/sharing/fb-sharing.png`,
    ogUrl: 'http://webistom.in/',
  },

  manifest: {
    lang: 'ru-RU',
    background_color: '#000fff',
    theme_color: '#000fff',
    name: 'Алексей Истомин :: Фронтенд разработчик',
    description:
      'webistom.in :: сайт-портфолио. Фронтенд разработчик из Москвы. Работаю с Vue.js/React.js. Мне нравится искать интересные решения, создавать невозможное при помощи CSS и реализовывать идеи в виде сайтов.',
    short_name: 'Webistomin',
  },

  generate: {
    routes: ['/', '/portfolio', '/en', '/en/portfolio'],
  },

  router: {
    middleware: 'i18n',
  },

  loading: { color: '#000fff' },

  css: ['~assets/sass/main.sass'],

  styleResources: {
    sass: ['~assets/sass/dev.sass'],
  },

  plugins: [
    { src: '~/plugins/libs/picturefill.js', ssr: false },
    { src: '~/plugins/libs/svg4everybody.js', ssr: false },
    { src: '~/plugins/libs/i18n.js', ssr: true },
    { src: '~/plugins/libs/scrollto.js', ssr: true },
    { src: '~/plugins/libs/lazy-image.js', ssr: true },
    { src: '~/plugins/libs/sal.js', ssr: false },
  ],

  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/svg-sprite', '@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/router', { path: 'router', DefaultRouter: true }],
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'http://webistom.in/',
      },
    ],
    '@nuxtjs/robots',
  ],

  build: {
    transpile: ['gsap'],
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator'],
    },
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-initial': {},
        'postcss-momentum-scrolling': ['scroll', 'auto'],
        'postcss-object-fit-images': {},
        'postcss-focus': {},
        autoprefixer: {
          grid: true,
          supports: false,
        },
      },
    },
    extend(config, ctx) {},
  },
};

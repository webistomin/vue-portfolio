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
      lang: 'ru',
      dir: 'ltr',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
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

  generate: {
    routes: ['/', '/portfolio', '/en', '/en/portfolio'],
  },

  router: {
    middleware: 'i18n',
  },

  loading: { color: '#fff' },

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

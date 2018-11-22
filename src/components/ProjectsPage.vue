<template>
  <div>
    <header class="page-header page-header--blue" role="banner">
      <div class="page-header__inner page-header__inner--blue">
        <div class="page-header__links page-header__links--high">
          <button
            class="page-header__link page-header__link--ru"
            :class="{'page-header__link--active': currentLocation.includes('ru')}"
            title="Russian version"
            @click="changeLocale('ru')"
          >
            RU
          </button>
          /
          <button
            class="page-header__link page-header__link--en"
            :class="{'page-header__link--active': currentLocation.includes('en')}"
            title="English version"
            @click="changeLocale('en')">
            EN
          </button>
        </div>
        <div class="page-header__logotype page-header__logotype--padding">
          <h1 class="page-header__logo">
            <router-link tag="a" to="/" class="page-header__home">Istomin.</router-link>
          </h1>
          <span class="page-header__desc">{{ $t('pageHeader.desc') }}</span></div>
        <button class="page-header__toggle"
                :class="{'page-header__toggle--opened' : isOpened}"
                @click="openMenu" type="button" tabindex="0">
          Open menu
          <span class="page-header__line"></span>
          <span class="page-header__line"></span>
          <span class="page-header__line"></span>
        </button>
        <nav class="main-nav main-nav--closed main-nav--padding"
             :class="{'main-nav--opened' : isOpened}"
             role="navigation">
          <ul class="main-nav__list">
            <li class="main-nav__item main-nav__item--blue">
              <router-link tag="a" to="/" class="main-nav__link main-nav__link--white">
                {{ $t('mainNav.fourthLink') }}
              </router-link>
            </li>
            <li class="main-nav__item main-nav__item--blue">
              <a href="#portfolio" class="main-nav__link main-nav__link--white" data-scroll>
                {{ $t('mainNav.secondLink') }}
              </a>
            </li>
            <li class="main-nav__item main-nav__item--blue">
              <a href="#contacts" class="main-nav__link main-nav__link--white" data-scroll>{{ $t('mainNav.thirdLink') }}</a></li>
          </ul>
        </nav>
        <section class="socials socials--hidden">
          <ul class="socials__list socials__list--justify">
            <li class="socials__item socials__item--white socials__item--square">
              <a href="https://t.me/webistomin" class="socials__link" target="_blank"
                 rel="noopener noreferrer" title="Telegram">
                <svg class="socials__icon socials__icon--blue socials__icon--rotate" width="30" height="30">
                  <use x="0" y="0" xlink:href="#icon-telegram"></use>
                </svg>
              </a>
            </li>
            <li class="socials__item socials__item--white socials__item--square">
              <a href="https://vk.com/webistomin" class="socials__link" target="_blank"
                 rel="noopener noreferrer" title="VK">
                <svg class="socials__icon socials__icon--blue socials__icon--rotate" width="30" height="30">
                  <use x="0" y="0" xlink:href="#icon-vk"></use>
                </svg>
              </a>
            </li>
            <li class="socials__item socials__item--white socials__item--square"><a
              href="https://www.linkedin.com/in/webistomin/" class="socials__link"
              target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg class="socials__icon socials__icon--blue socials__icon--rotate" width="30" height="30">
                <use x="0" y="0" xlink:href="#icon-linkedin"></use>
              </svg>
            </a>
            </li>
          </ul>
        </section>
      </div>
    </header>
    <main class="page-content" role="main">
      <div class="container">
        <section class="portfolio" id="portfolio">
          <h3 class="portfolio__title title">{{ $t("portfolio.title") }}</h3>
          <ul class="portfolio__list">
            <li class="portfolio__item portfolio__item--blue" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/movie-desktop.webp 1x,
                    ../../static/img/portfolio/movie-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/movie-tablet.webp 1x,
                    ../../static/img/portfolio/movie-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/movie-mobile.webp 1x,
                    ../../static/img/portfolio/movie-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/movie-desktop.jpg 1x,
                    ../../static/img/portfolio/movie-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/movie-tablet.jpg 1x,
                    ../../static/img/portfolio/movie-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/movie-mobile.jpg 1x,
                    ../../static/img/portfolio/movie-mobile@2x.jpg 2x">
                  <img src="../../static/img/portfolio/movie-mobile.jpg"
                       alt="Movie App" class="portfolio__pic">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Movie App"
                </figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://vuejs-movie-app.firebaseapp.com/" class="portfolio__link btn" target="_blank"
                   rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/vuejs-movie-app"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--top" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/yandex-desktop.webp 1x,
                    ../../static/img/portfolio/yandex-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/yandex-tablet.webp 1x,
                    ../../static/img/portfolio/yandex-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/yandex-mobile.webp 1x,
                    ../../static/img/portfolio/yandex-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/yandex-desktop.jpg 1x,
                    ../../static/img/portfolio/yandex-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/yandex-tablet.jpg 1x,
                    ../../static/img/portfolio/yandex-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/yandex-mobile.jpg 1x,
                    ../../static/img/portfolio/yandex-mobile@2x.jpg 2x">
                  <img src="../../static/img/portfolio/yandex-mobile.jpg"
                       alt="Yandex.Rooms" class="portfolio__pic">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Yandex.Rooms"
                </figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://yandex-rooms.firebaseapp.com/" class="portfolio__link btn" target="_blank"
                   rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/yandex-test"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/weather-desktop.webp 1x,
                    ../../static/img/portfolio/weather-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/weather-tablet.webp 1x,
                    ../../static/img/portfolio/weather-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/weather-mobile.webp 1x,
                    ../../static/img/portfolio/weather-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          srcset="../../static/img/portfolio/weather-desktop.jpg 1x,
                    ../../static/img/portfolio/weather-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          srcset="../../static/img/portfolio/weather-tablet.jpg 1x,
                    ../../static/img/portfolio/weather-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          srcset="../../static/img/portfolio/brume-mobile.jpg 1x,
                    ../../static/img/portfolio/weather-mobile@2x.jpg 2x">
                  <img src="../../static/img/portfolio/weather-mobile.jpg" alt="Weather App" class="portfolio__pic">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Weather App"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://vuejs-weather-app-32dde.firebaseapp.com/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/vuejs-weather-app"
                   class="portfolio__link btn" target="_blank"
                   rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/aviasales-desktop.webp 1x,
                    ../../static/img/portfolio/aviasales-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/aviasales-tablet.webp 1x,
                    ../../static/img/portfolio/aviasales-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/aviasales-mobile.webp 1x,
                    ../../static/img/portfolio/aviasales-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/aviasales-desktop.jpg 1x,
                    ../../static/img/portfolio/aviasales-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/aviasales-tablet.jpg 1x,
                    ../../static/img/portfolio/aviasales-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/aviasales-mobile.jpg 1x,
                    ../../static/img/portfolio/aviasales-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/aviasales-mobile.jpg" alt="Aviasales Test" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Aviasales Test"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://aviasales-test-b5f54.firebaseapp.com/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/aviasales-test" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/sport-desktop.webp 1x,
                    ../../static/img/portfolio/sport-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/sport-tablet.webp 1x,
                    ../../static/img/portfolio/sport-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/sport-mobile.webp 1x,
                    ../../static/img/portfolio/sport-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/sport-desktop.jpg 1x,
                    ../../static/img/portfolio/sport-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/sport-tablet.jpg 1x,
                    ../../static/img/portfolio/sport-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/sport-mobile.jpg 1x,
                    ../../static/img/portfolio/sport-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/sport-mobile.jpg" alt="sport" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Sport store"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="http://ishop.mcdir.ru/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/my-shop" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/blog-desktop.webp 1x,
                    ../../static/img/portfolio/blog-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/blog-tablet.webp 1x,
                    ../../static/img/portfolio/blog-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/blog-mobile.webp 1x,
                    ../../static/img/portfolio/blog-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/blog-desktop.jpg 1x,
                    ../../static/img/portfolio/blog-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/blog-tablet.jpg 1x,
                    ../../static/img/portfolio/blog-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/blog-mobile.jpg 1x,
                    ../../static/img/portfolio/blog-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/blog-mobile.jpg" alt="SSR Blog" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "SSR Blog"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://nuxt-blog-85622.firebaseapp.com/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/nuxtjs-app" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/dhrubok-desktop.webp 1x,
                    ../../static/img/portfolio/dhrubok-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/dhrubok-tablet.webp 1x,
                    ../../static/img/portfolio/dhrubok-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/dhrubok-mobile.webp 1x,
                    ../../static/img/portfolio/dhrubok-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/dhrubok-desktop.jpg 1x,
                    ../../static/img/portfolio/dhrubok-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/dhrubok-tablet.jpg 1x,
                    ../../static/img/portfolio/dhrubok-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/dhrubok-mobile.jpg 1x,
                    ../../static/img/portfolio/dhrubok-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/dhrubok-mobile.jpg" alt="dhrubok" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Dhrubok"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/ggpa-test-task/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/ggpa-test-task" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/poll-desktop.webp 1x, ../../static/img/portfolio/poll-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/poll-tablet.webp 1x, ../../static/img/portfolio/poll-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/poll-mobile.webp 1x, ../../static/img/portfolio/poll-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/poll-desktop.jpg 1x, ../../static/img/portfolio/poll-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/poll-tablet.jpg 1x, ../../static/img/portfolio/poll-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/poll-mobile.jpg 1x, ../../static/img/portfolio/poll-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/table-mobile.jpg" alt="Aviasales Poll" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Aviasales Poll"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://poll-aaff7.firebaseapp.com"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/marketing-test" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/table-desktop.webp 1x, ../../static/img/portfolio/table-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/table-tablet.webp 1x, ../../static/img/portfolio/table-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/table-mobile.webp 1x, ../../static/img/portfolio/table-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/table-desktop.jpg 1x, ../../static/img/portfolio/table-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/table-tablet.jpg 1x, ../../static/img/portfolio/table-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/table-mobile.jpg 1x, ../../static/img/portfolio/table-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/table-mobile.jpg" alt="Table component" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Table Component"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://vuejs-table-component.firebaseapp.com/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/vuejs-table-component" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/brume-desktop.webp 1x,
                    ../../static/img/portfolio/brume-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/brume-tablet.webp 1x,
                    ../../static/img/portfolio/brume-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/brume-mobile.webp 1x,
                    ../../static/img/portfolio/brume-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/brume-desktop.jpg 1x,
                    ../../static/img/portfolio/brume-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/brume-tablet.jpg 1x,
                    ../../static/img/portfolio/brume-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/brume-mobile.jpg 1x,
                    ../../static/img/portfolio/brume-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/brume-mobile.jpg" alt="brume" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Brume"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/brume-adaptive/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/brume-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/cat-desktop.webp 1x, ../../static/img/portfolio/cat-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/cat-tablet.webp 1x, ../../static/img/portfolio/cat-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/cat-mobile.webp 1x, ../../static/img/portfolio/cat-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/cat-desktop.jpg 1x, ../../static/img/portfolio/cat-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/cat-tablet.jpg 1x, ../../static/img/portfolio/cat-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/cakes-mobile.jpg 1x, ../../static/img/portfolio/cat-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/cat-mobile.jpg" alt="Cat Energy" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Cat Energy"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/cat-energy/" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/cat-energy" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a></div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/arbitration-desktop.webp 1x, ../../static/img/portfolio/arbitration-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/arbitration-tablet.webp 1x, ../../static/img/portfolio/arbitration-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/arbitration-mobile.webp 1x, ../../static/img/portfolio/arbitration-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/arbitration-desktop.jpg 1x, ../../static/img/portfolio/arbitration-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/arbitration-tablet.jpg 1x, ../../static/img/portfolio/arbitration-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/arbitration-mobile.jpg 1x, ../../static/img/portfolio/arbitration-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/arbitration-mobile.jpg" alt="Arbitration" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Arbitration"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/arbitration-adaptive/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/arbitration-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/yes-desktop.webp 1x, ../../static/img/portfolio/yes-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/yes-tablet.webp 1x, ../../static/img/portfolio/yes-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/yes-mobile.webp 1x, ../../static/img/portfolio/yes-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/yes-desktop.jpg 1x, ../../static/img/portfolio/yes-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/yes-tablet.jpg 1x, ../../static/img/portfolio/yes-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/yes-mobile.jpg 1x, ../../static/img/portfolio/yes-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/yes-mobile.jpg" alt="Yes" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Yes"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/yes-adaptive/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/yes-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/cakes-desktop.webp 1x, ../../static/img/portfolio/cakes-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/cakes-tablet.webp 1x, ../../static/img/portfolio/cakes-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/cakes-mobile.webp 1x, ../../static/img/portfolio/cakes-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/cakes-desktop.jpg 1x, ../../static/img/portfolio/cakes-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/cakes-tablet.jpg 1x, ../../static/img/portfolio/cakes-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/cakes-mobile.jpg 1x, ../../static/img/portfolio/cakes-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/cakes-mobile.jpg" alt="Cakes" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Pink"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/cakes-adaptive/" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/cakes-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/mishka-desktop.webp 1x, ../../static/img/portfolio/mishka-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/mishka-tablet.webp 1x, ../../static/img/portfolio/mishka-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/mishka-mobile.webp 1x, ../../static/img/portfolio/mishka-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/mishka-desktop.jpg 1x, ../../static/img/portfolio/mishka-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/mishka-tablet.jpg 1x, ../../static/img/portfolio/mishka-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/mishka-mobile.jpg 1x, ../../static/img/portfolio/mishka-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/mishka-mobile.jpg" alt="Mishka" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Mishka"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/mishka-adaptive/" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/mishka-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/park-desktop.webp 1x, ../../static/img/portfolio/park-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/park-tablet.webp 1x, ../../static/img/portfolio/park-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/park-mobile.webp 1x, ../../static/img/portfolio/park-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/park-desktop.jpg 1x, ../../static/img/portfolio/park-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/park-tablet.jpg 1x, ../../static/img/portfolio/park-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/park-mobile.jpg 1x, ../../static/img/portfolio/park-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/park-mobile.jpg" alt="Park" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Park"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/park-adaptive/" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/park-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/pink-desktop.webp 1x, ../../static/img/portfolio/pink-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/pink-tablet.webp 1x, ../../static/img/portfolio/pink-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/pink-mobile.webp 1x, ../../static/img/portfolio/pink-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/pink-desktop.jpg 1x, ../../static/img/portfolio/pink-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/pink-tablet.jpg 1x, ../../static/img/portfolio/pink-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/pink-mobile.jpg 1x, ../../static/img/portfolio/pink-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/pink-mobile.jpg" alt="Pink" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Pink"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/pink-adaptive/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/pink-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/accounting-desktop.webp 1x, ../../static/img/portfolio/accounting-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/accounting-tablet.webp 1x, ../../static/img/portfolio/accounting-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/accounting-mobile.webp 1x, ../../static/img/portfolio/accounting-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/accounting-desktop.jpg 1x, ../../static/img/portfolio/accounting-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/accounting-tablet.jpg 1x, ../../static/img/portfolio/accounting-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/accounting-mobile.jpg 1x, ../../static/img/portfolio/accounting-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/accounting-mobile.jpg" alt="Accounting" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">{{ $t("portfolio.caption") }} "Accounting"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/accounting-adaptive/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.firstBtn") }}
                </a>
                <a href="https://github.com/webistomin/accounting-adaptive" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">
                  {{ $t("portfolio.secondBtn") }}
                </a>
              </div>
            </li>
            <li class="portfolio__item portfolio__item--margin" tabindex="0">
              <figure class="portfolio__figure">
                <picture>
                  <source type="image/webp" media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/gllacy-desktop.webp 1x, ../../static/img/portfolio/gllacy-desktop@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/gllacy-tablet.webp 1x, ../../static/img/portfolio/gllacy-tablet@2x.webp 2x">
                  <source type="image/webp" media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/gllacy-mobile.webp 1x, ../../static/img/portfolio/gllacy-mobile@2x.webp 2x">
                  <source media="(min-width: 1200px)"
                          data-srcset="../../static/img/portfolio/gllacy-desktop.jpg 1x, ../../static/img/portfolio/gllacy-desktop@2x.jpg 2x">
                  <source media="(min-width: 992px)"
                          data-srcset="../../static/img/portfolio/gllacy-tablet.jpg 1x, ../../static/img/portfolio/gllacy-tablet@2x.jpg 2x">
                  <source media="(min-width: 320px)"
                          data-srcset="../../static/img/portfolio/gllacy-mobile.jpg 1x, ../../static/img/portfolio/gllacy-mobile@2x.jpg 2x">
                  <img data-src="../../static/img/portfolio/gllacy-mobile.jpg" alt="Gllacy" class="portfolio__pic lazyload">
                </picture>
                <figcaption class="portfolio__caption portfolio__caption--white">
                  {{ $t("portfolio.caption") }} "Gllacy"</figcaption>
              </figure>
              <div class="portfolio__buttons">
                <a href="https://webistomin.github.io/gllacy-shop/"
                   class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.firstBtn") }}</a>
                <a href="https://github.com/webistomin/gllacy-shop" class="portfolio__link btn" target="_blank" rel="noopener noreferrer">{{ $t("portfolio.secondBtn") }}</a></div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageFooter from './PageFooter';

  export default {
    name: 'ProjectsPage',
    components: {
      PageFooter,
    },
    data() {
      return {
        currentLocation: [],
        isOpened: false,
      };
    },
    methods: {
      changeLocale(lang) {
        this.$locale = lang;
        this.currentLocation = [];
        this.currentLocation.push(lang);
      },
      openMenu() {
        this.isOpened = !this.isOpened;
      },
    },
    computed: {},
    mounted() {
      this.currentLocation.push(this.$locale);
    },
  };
</script>

<style scoped>

</style>

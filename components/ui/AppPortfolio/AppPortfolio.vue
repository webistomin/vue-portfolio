<template lang="pug">
  section#portfolio.portfolio
    .portfolio__container.container
      h3(data-animation='fade-up').portfolio__title.title {{ $t("portfolio.title") }}
      ul.portfolio__list
        li(
          v-for='(project, index) of projects.slice(0, isMainPage ? 5 : projects.length)'
          :key='project.title'
          :class='{"portfolio__item_blue" : index === 0, \
          "portfolio__item_top" : index === 1, \
            "portfolio__item_margin": index % 2 === 0 && index !== 0}'
          data-animation='fade-up'
          ).portfolio__item
            figure.portfolio__figure
              v-lazy-image.portfolio__pic(
                use-picture
                :src='project.images.jpg.mobile'
                :alt='project.title'
              )
                source(
                  type='image/webp'
                  media='(min-width: 1280px)'
                  :srcset='`${project.images.webp.desktop} 1x,\
                ${project.images.webp2x.desktop} 2x`')
                source(
                  type='image/webp'
                  media='(min-width: 1024px)'
                  :srcset='`${project.images.webp.tablet} 1x,\
                ${project.images.webp2x.tablet} 2x`')
                source(
                  type='image/webp'
                  media='(min-width: 320px)'
                  :srcset='`${project.images.webp.mobile} 1x,\
                ${project.images.webp2x.mobile} 2x`')
                source(media='(min-width: 1280px)'
                  :srcset='`${project.images.jpg.desktop} 1x,\
                ${project.images.jpg2x.desktop} 2x`')
                source(media='(min-width: 1024px)'
                  :srcset='`${project.images.jpg.tablet} 1x,\
                ${project.images.jpg2x.tablet} 2x`')
                source(media='(min-width: 320px)'
                  :srcset='`${project.images.jpg.mobile} 1x,\
                ${project.images.jpg2x.mobile} 2x`')
              figcaption.portfolio__caption
                | {{ $t("portfolio.caption") }} &laquo;{{project.title}}&raquo;
            .portfolio__buttons(v-if='project.demo || project.source')
              a.portfolio__link.btn(
                v-if='project.demo'
                :href='project.demo'
                target='_blank'
                rel='noopener noreferrer'
                ) {{ $t("portfolio.firstBtn") }}
              a.portfolio__link.btn(
                v-if='project.source'
                :href='project.source'
                target='_blank'
                rel='noopener noreferrer'
                )
                | {{ $t("portfolio.secondBtn") }}
      nuxt-link.portfolio__link.btn(to='/portfolio' data-animation='fade-up' v-if='isMainPage')
        | {{ $t("portfolio.thirdBtn") }}

</template>

<script>
  const VanillaTilt = () => import('vanilla-tilt');

  export default {
    name: 'AppPortfolio',
    data() {
      return {
        projects: [
          {
            title: 'Volkswagen: Финансовые услуги',
            images: {
              jpg: {
                mobile: '/img/portfolio/vfws-mobile.jpg',
                tablet: '/img/portfolio/vfws-tablet.jpg',
                desktop: '/img/portfolio/vfws-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/vfws-mobile@2x.jpg',
                tablet: '/img/portfolio/vfws-tablet@2x.jpg',
                desktop: '/img/portfolio/vfws-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/vfws-mobile.webp',
                tablet: '/img/portfolio/vfws-tablet.webp',
                desktop: '/img/portfolio/vfws-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/vfws-mobile@2x.webp',
                tablet: '/img/portfolio/vfws-tablet@2x.webp',
                desktop: '/img/portfolio/vfws-desktop@2x.webp',
              },
            },
            demo: 'https://fs.vwfs.ru/',
            source: '',
          },
          {
            title: "Lady's Showroom",
            images: {
              jpg: {
                mobile: '/img/portfolio/ladys-mobile.jpg',
                tablet: '/img/portfolio/ladys-tablet.jpg',
                desktop: '/img/portfolio/ladys-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/ladys-mobile@2x.jpg',
                tablet: '/img/portfolio/ladys-tablet@2x.jpg',
                desktop: '/img/portfolio/ladys-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/ladys-mobile.webp',
                tablet: '/img/portfolio/ladys-tablet.webp',
                desktop: '/img/portfolio/ladys-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/ladys-mobile@2x.webp',
                tablet: '/img/portfolio/ladys-tablet@2x.webp',
                desktop: '/img/portfolio/ladys-desktop@2x.webp',
              },
            },
            demo: 'http://ladysshowroom.ru/',
            source: '',
          },
          {
            title: 'Versan',
            images: {
              jpg: {
                mobile: '/img/portfolio/versan-mobile.jpg',
                tablet: '/img/portfolio/versan-tablet.jpg',
                desktop: '/img/portfolio/versan-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/versan-mobile@2x.jpg',
                tablet: '/img/portfolio/versan-tablet@2x.jpg',
                desktop: '/img/portfolio/versan-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/versan-mobile.webp',
                tablet: '/img/portfolio/versan-tablet.webp',
                desktop: '/img/portfolio/versan-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/versan-mobile@2x.webp',
                tablet: '/img/portfolio/versan-tablet@2x.webp',
                desktop: '/img/portfolio/versan-desktop@2x.webp',
              },
            },
            demo: 'https://versan-fluid.ru/',
            source: '',
          },
          {
            title: 'Volkswagen: Банк',
            images: {
              jpg: {
                mobile: '/img/portfolio/bank-mobile.jpg',
                tablet: '/img/portfolio/bank-tablet.jpg',
                desktop: '/img/portfolio/bank-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/bank-mobile@2x.jpg',
                tablet: '/img/portfolio/bank-tablet@2x.jpg',
                desktop: '/img/portfolio/bank-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/bank-mobile.webp',
                tablet: '/img/portfolio/bank-tablet.webp',
                desktop: '/img/portfolio/bank-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/bank-mobile@2x.webp',
                tablet: '/img/portfolio/bank-tablet@2x.webp',
                desktop: '/img/portfolio/bank-desktop@2x.webp',
              },
            },
            demo: 'https://bank.vwfs.ru/',
            source: '',
          },
          {
            title: 'Volkswagen: Лизинг',
            images: {
              jpg: {
                mobile: '/img/portfolio/leasing-mobile.jpg',
                tablet: '/img/portfolio/leasing-tablet.jpg',
                desktop: '/img/portfolio/leasing-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/leasing-mobile@2x.jpg',
                tablet: '/img/portfolio/leasing-tablet@2x.jpg',
                desktop: '/img/portfolio/leasing-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/leasing-mobile.webp',
                tablet: '/img/portfolio/leasing-tablet.webp',
                desktop: '/img/portfolio/leasing-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/leasing-mobile@2x.webp',
                tablet: '/img/portfolio/leasing-tablet@2x.webp',
                desktop: '/img/portfolio/leasing-desktop@2x.webp',
              },
            },
            demo: 'https://leasing.vwfs.ru/',
            source: '',
          },
          {
            title: 'Lethendy',
            images: {
              jpg: {
                mobile: '/img/portfolio/lethendy-mobile.jpg',
                tablet: '/img/portfolio/lethendy-tablet.jpg',
                desktop: '/img/portfolio/lethendy-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/lethendy-mobile@2x.jpg',
                tablet: '/img/portfolio/lethendy-tablet@2x.jpg',
                desktop: '/img/portfolio/lethendy-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/lethendy-mobile.webp',
                tablet: '/img/portfolio/lethendy-tablet.webp',
                desktop: '/img/portfolio/lethendy-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/lethendy-mobile@2x.webp',
                tablet: '/img/portfolio/lethendy-tablet@2x.webp',
                desktop: '/img/portfolio/lethendy-desktop@2x.webp',
              },
            },
            demo: 'http://lethendyestates.co.uk/',
            source: '',
          },
          {
            title: 'Алёна Владимирская',
            images: {
              jpg: {
                mobile: '/img/portfolio/vladimirskaya-mobile.jpg',
                tablet: '/img/portfolio/vladimirskaya-tablet.jpg',
                desktop: '/img/portfolio/vladimirskaya-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/vladimirskaya-mobile@2x.jpg',
                tablet: '/img/portfolio/vladimirskaya-tablet@2x.jpg',
                desktop: '/img/portfolio/vladimirskaya-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/vladimirskaya-mobile.webp',
                tablet: '/img/portfolio/vladimirskaya-tablet.webp',
                desktop: '/img/portfolio/vladimirskaya-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/vladimirskaya-mobile@2x.webp',
                tablet: '/img/portfolio/vladimirskaya-tablet@2x.webp',
                desktop: '/img/portfolio/vladimirskaya-desktop@2x.webp',
              },
            },
            demo: 'https://vladimirskaya.com/',
            source: '',
          },
          {
            title: 'Алёна Владимирская: Консультации',
            images: {
              jpg: {
                mobile: '/img/portfolio/consult-mobile.jpg',
                tablet: '/img/portfolio/consult-tablet.jpg',
                desktop: '/img/portfolio/consult-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/consult-mobile@2x.jpg',
                tablet: '/img/portfolio/consult-tablet@2x.jpg',
                desktop: '/img/portfolio/consult-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/consult-mobile.webp',
                tablet: '/img/portfolio/consult-tablet.webp',
                desktop: '/img/portfolio/consult-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/consult-mobile@2x.webp',
                tablet: '/img/portfolio/consult-tablet@2x.webp',
                desktop: '/img/portfolio/consult-desktop@2x.webp',
              },
            },
            demo: 'https://vladimirskaya.com/consult',
            source: '',
          },
          {
            title: 'Алёна Владимирская: HR',
            images: {
              jpg: {
                mobile: '/img/portfolio/hr-mobile.jpg',
                tablet: '/img/portfolio/hr-tablet.jpg',
                desktop: '/img/portfolio/hr-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/hr-mobile@2x.jpg',
                tablet: '/img/portfolio/hr-tablet@2x.jpg',
                desktop: '/img/portfolio/hr-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/hr-mobile.webp',
                tablet: '/img/portfolio/hr-tablet.webp',
                desktop: '/img/portfolio/hr-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/hr-mobile@2x.webp',
                tablet: '/img/portfolio/hr-tablet@2x.webp',
                desktop: '/img/portfolio/hr-desktop@2x.webp',
              },
            },
            demo: 'https://vladimirskaya.com/produce',
            source: '',
          },
          {
            title: 'Champ',
            images: {
              jpg: {
                mobile: '/img/portfolio/champ-mobile.jpg',
                tablet: '/img/portfolio/champ-tablet.jpg',
                desktop: '/img/portfolio/champ-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/champ-mobile@2x.jpg',
                tablet: '/img/portfolio/champ-tablet@2x.jpg',
                desktop: '/img/portfolio/champ-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/champ-mobile.webp',
                tablet: '/img/portfolio/champ-tablet.webp',
                desktop: '/img/portfolio/champ-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/champ-mobile@2x.webp',
                tablet: '/img/portfolio/champ-tablet@2x.webp',
                desktop: '/img/portfolio/champ-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/champ-adaptive/',
            source: 'https://github.com/webistomin/champ-adaptive/',
          },
          {
            title: 'Availy',
            images: {
              jpg: {
                mobile: '/img/portfolio/availy-mobile.jpg',
                tablet: '/img/portfolio/availy-tablet.jpg',
                desktop: '/img/portfolio/availy-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/availy-mobile@2x.jpg',
                tablet: '/img/portfolio/availy-tablet@2x.jpg',
                desktop: '/img/portfolio/availy-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/availy-mobile.webp',
                tablet: '/img/portfolio/availy-tablet.webp',
                desktop: '/img/portfolio/availy-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/availy-mobile@2x.webp',
                tablet: '/img/portfolio/availy-tablet@2x.webp',
                desktop: '/img/portfolio/availy-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/availy-adaptive/',
            source: 'https://github.com/webistomin/availy-adaptive',
          },
          {
            title: 'Sveza',
            images: {
              jpg: {
                mobile: '/img/portfolio/sveza-mobile.jpg',
                tablet: '/img/portfolio/sveza-tablet.jpg',
                desktop: '/img/portfolio/sveza-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/sveza-mobile@2x.jpg',
                tablet: '/img/portfolio/sveza-tablet@2x.jpg',
                desktop: '/img/portfolio/sveza-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/sveza-mobile.webp',
                tablet: '/img/portfolio/sveza-tablet.webp',
                desktop: '/img/portfolio/sveza-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/sveza-mobile@2x.webp',
                tablet: '/img/portfolio/sveza-tablet@2x.webp',
                desktop: '/img/portfolio/sveza-desktop@2x.webp',
              },
            },
            demo: 'https://sveza-549d2.firebaseapp.com/',
            source: 'https://github.com/webistomin/sveza/commits/master',
          },
          {
            title: 'Тунайча',
            images: {
              jpg: {
                mobile: '/img/portfolio/tunaicha-mobile.jpg',
                tablet: '/img/portfolio/tunaicha-tablet.jpg',
                desktop: '/img/portfolio/tunaicha-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/tunaicha-mobile@2x.jpg',
                tablet: '/img/portfolio/tunaicha-tablet@2x.jpg',
                desktop: '/img/portfolio/tunaicha-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/tunaicha-mobile.webp',
                tablet: '/img/portfolio/tunaicha-tablet.webp',
                desktop: '/img/portfolio/tunaicha-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/tunaicha-mobile@2x.webp',
                tablet: '/img/portfolio/tunaicha-tablet@2x.webp',
                desktop: '/img/portfolio/tunaicha-desktop@2x.webp',
              },
            },
            demo: 'http://ikra-tunaycha.ru/',
            source: 'https://github.com/webistomin/tunaicha-adaptive',
          },
          {
            title: 'Куба',
            images: {
              jpg: {
                mobile: '/img/portfolio/cuba-mobile.jpg',
                tablet: '/img/portfolio/cuba-tablet.jpg',
                desktop: '/img/portfolio/cuba-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/cuba-mobile@2x.jpg',
                tablet: '/img/portfolio/cuba-tablet@2x.jpg',
                desktop: '/img/portfolio/cuba-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/cuba-mobile.webp',
                tablet: '/img/portfolio/cuba-tablet.webp',
                desktop: '/img/portfolio/cuba-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/cuba-mobile@2x.webp',
                tablet: '/img/portfolio/cuba-tablet@2x.webp',
                desktop: '/img/portfolio/cuba-desktop@2x.webp',
              },
            },
            demo: 'http://www.cubamedia.ru/',
            source: '',
          },
          {
            title: 'Yes',
            images: {
              jpg: {
                mobile: '/img/portfolio/yes-mobile.jpg',
                tablet: '/img/portfolio/yes-tablet.jpg',
                desktop: '/img/portfolio/yes-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/yes-mobile@2x.jpg',
                tablet: '/img/portfolio/yes-tablet@2x.jpg',
                desktop: '/img/portfolio/yes-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/yes-mobile.webp',
                tablet: '/img/portfolio/yes-tablet.webp',
                desktop: '/img/portfolio/yes-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/yes-mobile@2x.webp',
                tablet: '/img/portfolio/yes-tablet@2x.webp',
                desktop: '/img/portfolio/yes-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/yes-adaptive/',
            source: 'https://github.com/webistomin/yes-adaptive',
          },
          {
            title: 'Pink',
            images: {
              jpg: {
                mobile: '/img/portfolio/pink-mobile.jpg',
                tablet: '/img/portfolio/pink-tablet.jpg',
                desktop: '/img/portfolio/pink-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/pink-mobile@2x.jpg',
                tablet: '/img/portfolio/pink-tablet@2x.jpg',
                desktop: '/img/portfolio/pink-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/pink-mobile.webp',
                tablet: '/img/portfolio/pink-tablet.webp',
                desktop: '/img/portfolio/pink-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/pink-mobile@2x.webp',
                tablet: '/img/portfolio/pink-tablet@2x.webp',
                desktop: '/img/portfolio/pink-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/pink-adaptive/',
            source: 'https://github.com/webistomin/pink-adaptive/',
          },
          {
            title: 'Cakes',
            images: {
              jpg: {
                mobile: '/img/portfolio/cakes-mobile.jpg',
                tablet: '/img/portfolio/cakes-tablet.jpg',
                desktop: '/img/portfolio/cakes-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/cakes-mobile@2x.jpg',
                tablet: '/img/portfolio/cakes-tablet@2x.jpg',
                desktop: '/img/portfolio/cakes-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/cakes-mobile.webp',
                tablet: '/img/portfolio/cakes-tablet.webp',
                desktop: '/img/portfolio/cakes-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/cakes-mobile@2x.webp',
                tablet: '/img/portfolio/cakes-tablet@2x.webp',
                desktop: '/img/portfolio/cakes-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/cakes-adaptive/',
            source: 'https://github.com/webistomin/cakes-adaptive/',
          },
          {
            title: 'Brume',
            images: {
              jpg: {
                mobile: '/img/portfolio/brume-mobile.jpg',
                tablet: '/img/portfolio/brume-tablet.jpg',
                desktop: '/img/portfolio/brume-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/brume-mobile@2x.jpg',
                tablet: '/img/portfolio/brume-tablet@2x.jpg',
                desktop: '/img/portfolio/brume-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/brume-mobile.webp',
                tablet: '/img/portfolio/brume-tablet.webp',
                desktop: '/img/portfolio/brume-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/brume-mobile@2x.webp',
                tablet: '/img/portfolio/brume-tablet@2x.webp',
                desktop: '/img/portfolio/brume-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/brume-adaptive/',
            source: 'https://github.com/webistomin/brume-adaptive/',
          },
          {
            title: 'Cat Energy',
            images: {
              jpg: {
                mobile: '/img/portfolio/cat-mobile.jpg',
                tablet: '/img/portfolio/cat-tablet.jpg',
                desktop: '/img/portfolio/cat-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/cat-mobile@2x.jpg',
                tablet: '/img/portfolio/cat-tablet@2x.jpg',
                desktop: '/img/portfolio/cat-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/cat-mobile.webp',
                tablet: '/img/portfolio/cat-tablet.webp',
                desktop: '/img/portfolio/cat-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/cat-mobile@2x.webp',
                tablet: '/img/portfolio/cat-tablet@2x.webp',
                desktop: '/img/portfolio/cat-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/cat-energy/',
            source: 'https://github.com/webistomin/cat-energy/',
          },
          {
            title: 'Dhrubok',
            images: {
              jpg: {
                mobile: '/img/portfolio/dhrubok-mobile.jpg',
                tablet: '/img/portfolio/dhrubok-tablet.jpg',
                desktop: '/img/portfolio/dhrubok-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/dhrubok-mobile@2x.jpg',
                tablet: '/img/portfolio/dhrubok-tablet@2x.jpg',
                desktop: '/img/portfolio/dhrubok-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/dhrubok-mobile.webp',
                tablet: '/img/portfolio/dhrubok-tablet.webp',
                desktop: '/img/portfolio/dhrubok-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/dhrubok-mobile@2x.webp',
                tablet: '/img/portfolio/dhrubok-tablet@2x.webp',
                desktop: '/img/portfolio/dhrubok-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/ggpa-test-task/',
            source: 'https://github.com/webistomin/ggpa-test-task/',
          },
          {
            title: 'Mishka',
            images: {
              jpg: {
                mobile: '/img/portfolio/mishka-mobile.jpg',
                tablet: '/img/portfolio/mishka-tablet.jpg',
                desktop: '/img/portfolio/mishka-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/mishka-mobile@2x.jpg',
                tablet: '/img/portfolio/mishka-tablet@2x.jpg',
                desktop: '/img/portfolio/mishka-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/mishka-mobile.webp',
                tablet: '/img/portfolio/mishka-tablet.webp',
                desktop: '/img/portfolio/mishka-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/mishka-mobile@2x.webp',
                tablet: '/img/portfolio/mishka-tablet@2x.webp',
                desktop: '/img/portfolio/mishka-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/mishka-adaptive/',
            source: 'https://github.com/webistomin/mishka-adaptive/',
          },
          {
            title: 'Арбитраж трафика',
            images: {
              jpg: {
                mobile: '/img/portfolio/arbitration-mobile.jpg',
                tablet: '/img/portfolio/arbitration-tablet.jpg',
                desktop: '/img/portfolio/arbitration-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/arbitration-mobile@2x.jpg',
                tablet: '/img/portfolio/arbitration-tablet@2x.jpg',
                desktop: '/img/portfolio/arbitration-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/arbitration-mobile.webp',
                tablet: '/img/portfolio/arbitration-tablet.webp',
                desktop: '/img/portfolio/arbitration-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/arbitration-mobile@2x.webp',
                tablet: '/img/portfolio/arbitration-tablet@2x.webp',
                desktop: '/img/portfolio/arbitration-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/arbitration-adaptive/',
            source: 'https://github.com/webistomin/arbitration-adaptive/',
          },
          {
            title: 'Gllacy',
            images: {
              jpg: {
                mobile: '/img/portfolio/gllacy-mobile.jpg',
                tablet: '/img/portfolio/gllacy-tablet.jpg',
                desktop: '/img/portfolio/gllacy-desktop.jpg',
              },
              jpg2x: {
                mobile: '/img/portfolio/gllacy-mobile@2x.jpg',
                tablet: '/img/portfolio/gllacy-tablet@2x.jpg',
                desktop: '/img/portfolio/gllacy-desktop@2x.jpg',
              },
              webp: {
                mobile: '/img/portfolio/gllacy-mobile.webp',
                tablet: '/img/portfolio/gllacy-tablet.webp',
                desktop: '/img/portfolio/gllacy-desktop.webp',
              },
              webp2x: {
                mobile: '/img/portfolio/gllacy-mobile@2x.webp',
                tablet: '/img/portfolio/gllacy-tablet@2x.webp',
                desktop: '/img/portfolio/gllacy-desktop@2x.webp',
              },
            },
            demo: 'https://webistomin.github.io/gllacy-shop/',
            source: 'https://github.com/webistomin/gllacy-shop/',
          },
        ],
      };
    },
    computed: {
      isMainPage() {
        return this.$route.name === 'main';
      },
    },
    async mounted() {
      const tilt = await VanillaTilt();
      tilt.init(document.querySelectorAll('.portfolio__item'), {
        glare: true,
        'max-glare': 0.8,
        speed: 1000,
        reverse: true,
      });
    },
  };
</script>

<style lang="sass">
  @import "AppPortfolio"
</style>

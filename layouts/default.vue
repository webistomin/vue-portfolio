<template lang="pug">
  #app
    .cursor
      .cursor__dot#js-cursor-dot
      .cursor__outline#js-cursor-outline
    .overlay(ref='overlay')
    noscript Please turn javascript on and reload the page 😋
    AppHeader
    nuxt
    AppFooter
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import throttle from 'lodash.throttle';
  import AppHeader from '@/components/partials/AppHeader/AppHeader';
  import AppFooter from '@/components/partials/AppFooter/AppFooter';
  gsap.registerPlugin(CSSPlugin);

  export default {
    components: { AppFooter, AppHeader },
    mounted() {
      // eslint-disable-next-line no-console
      console.log(
        '%c%s',
        'color: green; font-size: 12px;',
        'Ребята, не стоит вскрывать эту тему. Вы молодые, шутливые, вам все легко. Это не то. Это не Чикатило и даже не архивы спецслужб. Сюда лучше не лезть. Серьезно, любой из вас будет жалеть. Лучше закройте тему и забудьте, что тут писалось. Я вполне понимаю, что данным сообщением вызову дополнительный интерес, но хочу сразу предостеречь пытливых - стоп. Остальные просто не найдут.'
      );

      const body = document.body;
      let timer = null;

      window.addEventListener(
        'scroll',
        function() {
          clearTimeout(timer);
          if (!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover');
          }

          timer = setTimeout(function() {
            body.classList.remove('disable-hover');
          }, 150);
        },
        false
      );

      // Global vh
      let lastHeight = window.innerHeight;
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      window.addEventListener(
        'resize',
        throttle(() => {
          if (window.innerWidth > window.innerHeight || Math.abs(lastHeight - window.innerHeight) > 200) {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            lastHeight = window.innerHeight;
          }
        }, 300),
        { passive: true }
      );

      // Cursor logic
      const cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        cursorWhite: false,
        $dot: document.getElementById('js-cursor-dot'),
        $outline: document.getElementById('js-cursor-outline'),

        init() {
          // Set up element sizes
          this.dotSize = this.$dot.offsetWidth;
          this.outlineSize = this.$outline.offsetWidth;

          this.setupEventListeners();
          this.animateDotOutline();
        },

        //     updateCursor: function(e) {
        //         var self = this;

        //         console.log(e)

        //         // Show the cursor
        //         self.cursorVisible = true;
        //         self.toggleCursorVisibility();

        //         // Position the dot
        //         self.endX = e.pageX;
        //         self.endY = e.pageY;
        //         self.$dot.style.top = self.endY + 'px';
        //         self.$dot.style.left = self.endX + 'px';
        //     },

        setupEventListeners() {
          const self = this;

          // Anchor hovering
          document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });

          document.querySelectorAll('[data-cursor-white]').forEach(function(el) {
            el.addEventListener('mouseover', function() {
              self.cursorWhite = true;
              self.toggleWhiteCursor();
            });
            el.addEventListener('mouseout', function() {
              self.cursorWhite = false;
              self.toggleWhiteCursor();
            });
          });

          // Click events
          document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });

          document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
          });

          // Hide/show cursor
          document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          });

          document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          });
        },

        animateDotOutline() {
          const self = this;

          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + 'px';
          self.$outline.style.left = self._x + 'px';

          requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize() {
          const self = this;

          if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
          } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
          }
        },

        toggleWhiteCursor() {
          const self = this;

          if (self.cursorWhite) {
            self.$dot.classList.add('cursor__dot_white');
            self.$outline.classList.add('cursor__outline_white');
          } else {
            self.$dot.classList.remove('cursor__dot_white');
            self.$outline.classList.remove('cursor__outline_white');
          }
        },

        toggleCursorVisibility() {
          const self = this;

          if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          }
        },
      };
      cursor.init();

      // Overlay
      this.$router.beforeEach((to, from, next) => {
        if (to.path === from.path || to.name === from.name) {
          next();
          // eslint-disable-next-line no-useless-return
          return;
        }

        const overlay = this.$refs.overlay;
        gsap.fromTo(
          overlay,
          { x: '-100%' },
          {
            x: 0,
            duration: 1,
            ease: 'Cubic.easeInOut',
            onComplete: () => {
              next();
              window.scrollTo(0, 0);
              gsap.fromTo(overlay, { x: 0 }, { x: '100%' });
            },
          }
        );
      });

      this.$router.afterEach(() => {
        this.$nextTick(() => {
          cursor.setupEventListeners();
        });
      });
    },
    head() {
      return {
        meta: [
          { hid: 'description', name: 'description', content: this.$t('meta.description') },
          { hid: 'keywords', name: 'keywords', content: this.$t('meta.keywords') },
        ],
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
      };
    },
  };
</script>

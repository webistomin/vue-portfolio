<template lang="pug">
  section(@mouseenter='animateHand' @mouseleave='pauseHand').intro
    .container.intro__container
      .intro__column.intro__column--margin(data-animation='fade-up')
        figure.intro__figure
          picture
            source(type='image/webp', media='(min-width: 320px)', srcset='/img/me.webp 1x, /img/me@2x.webp 2x')
            source(media='(min-width: 320px)' srcset='/img/me.jpg 1x, /img/me@2x.jpg 2x')
            img.intro__img(src='/img/me.jpg' alt='Alexey Istomin' width='552' height='628')
      .intro__column.intro__column--padding(data-animation='fade-up')
        h2.intro__title.title {{ $t("intro.title") }}
          span(ref='introHand').intro__hand 👋
        p.intro__text {{ $t("intro.text") }}
        a.intro__link.btn(
          @click='scrollToElement($event, "#contacts")'
          href='#contacts') {{ $t("intro.link") }}
</template>

<script>
  export default {
    name: 'AppIntro',
    methods: {
      animateHand() {
        this.$refs.introHand.style.animationPlayState = 'running';
      },
      pauseHand() {
        this.$refs.introHand.style.animationPlayState = 'paused';
      },
      scrollToElement(e, el) {
        e.preventDefault();
        this.$scrollTo(el, 1500, {
          easing: [0.785, 0.135, 0.15, 0.86],
          offset: -100,
        });
      },
    },
  };
</script>

<style lang="sass">
  @import "AppIntro"
</style>

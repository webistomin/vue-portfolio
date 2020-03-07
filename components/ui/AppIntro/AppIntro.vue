<template lang="pug">
  section.intro
    .container.intro__container
      .intro__column.intro__column--margin
        figure.intro__figure
          picture
            source(type='image/webp', media='(min-width: 320px)', srcset='/img/me.webp 1x, /img/me@2x.webp 2x')
            source(media='(min-width: 320px)' srcset='/img/me.jpg 1x, /img/me@2x.jpg 2x')
            img.intro__img(src='/img/me.jpg' alt='Alexey Istomin' width='552' height='628')
      .intro__column.intro__column--padding
        h2.intro__title.title {{ $t("intro.title") }}
          span.intro__hand 👋
        p.intro__text {{ $t("intro.text") }}
        a.intro__link.btn(href='#contacts', data-scroll='') {{ $t("intro.link") }}
</template>

<script>
  export default {
    name: 'AppIntro',
  };
</script>

<style lang="sass">
  @import "AppIntro"
</style>

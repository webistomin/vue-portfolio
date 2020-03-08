<template lang="pug" functional>
  .socials(
    :class='[{"socials_hidden" : props.isSquared}, data.staticClass ? data.staticClass : "", data.class ? data.class : ""]'
  )
    ul(
      :class='{"socials__list_justify" : props.isSquared}'
    ).socials__list
      li(
        v-for='(social, index) of props.socials'
        :key='`social-${index}`'
        :class='{"socials__item_square" : props.isSquared, "socials__item_white" : props.isWhite}'
      ).socials__item
        a.socials__link(
          :href='social.link'
          target='_blank'
          rel='noopener noreferrer nofollow'
          :title='social.name'
        )
          svg-icon(
            :width='props.isSquared ? 30 : 24'
            :height='props.isSquared ? 30 : 24'
            :name='`icon-${social.name.toLowerCase()}`'
            :class='{"socials__icon_white socials__icon_rotate" : props.isSquared, "socials__icon_blue" : props.isWhite}'
          ).socials__icon
</template>

<script>
  export default {
    name: 'AppSocials',
    props: {
      isSquared: {
        type: Boolean,
        default: false,
      },
      socials: {
        type: Array,
        default: () => [],
      },
      isWhite: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="sass">
  @import "AppSocials"
</style>

<template lang="pug">
  .socials.socials_hidden
    ul.socials__list.socials__list_justify
      li.socials__item.socials__item_square
        a.socials__link(
          href='https://t.me/webistomin'
          target='_blank'
          rel='noopener noreferrer nofollow'
          title='Telegram'
        )
          svg-icon(
            width='30'
            height='30'
            name='icon-telegram'
          )
      li.socials__item.socials__item_square
        a.socials__link(
          href='https://vk.com/webistomin'
          target='_blank'
          rel='noopener noreferrer'
          title='VK'
        )
          svg-icon(
            width='30'
            height='30'
            name='icon-vk'
          ).socials__icon
      li.socials__item.socials__item_square
        a.socials__link(
          href='https://www.linkedin.com/in/webistomin/'
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
        )
          svg-icon(
            width='30'
            height='30'
            name='icon-linkedin'
          )
</template>

<script>
  export default {
    name: 'AppSocials',
  };
</script>

<style lang="sass">
  @import "AppSocials"
</style>

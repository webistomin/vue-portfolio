<template lang="pug">
  section#contacts.contacts
    .contacts__column
      h2.contacts__title.title {{ $t('pageFooter.title') }}
      section.socials
        ul.socials__list
          li.socials__item
            a.socials__link(href='https://t.me/webistomin', target='_blank', rel='noopener noreferrer nofollow', title='Telegram')
              svg-icon(
                width='25'
                height='25'
                name='icon-telegram'
              ).socials__icon
          li.socials__item
            a.socials__link(href='https://vk.com/webistomin', target='_blank', rel='noopener noreferrer nofollow', title='VK')
              svg-icon(
                width='25'
                height='25'
                name='icon-vk'
              ).socials__icon
          li.socials__item
            a.socials__link(href='https://www.facebook.com/webistomin', target='_blank', rel='noopener noreferrer nofollow', title='Facebook')
              svg-icon(
                width='25'
                height='25'
                name='icon-facebook'
              ).socials__icon
          li.socials__item
            a.socials__link(href='https://linkedin.com/in/webistomin', target='_blank', rel='noopener noreferrer nofollow', title='LinkedIn')
              svg-icon(
                width='25'
                height='25'
                name='icon-linkedin'
              ).socials__icon
          li.socials__item
            a.socials__link(href='https://github.com/webistomin', target='_blank', rel='noopener noreferrer nofollow', title='GitHub')
              svg-icon(
                width='25'
                height='25'
                name='icon-github'
              ).socials__icon
      .contacts__info
        h3.contacts__desc {{ $t('pageFooter.firstInfo') }}
        a.contacts__link(href='mailto:istomin.working@gmail.com')
          | istomin.working@gmail.com
      .contacts__info
        h3.contacts__desc {{ $t('pageFooter.secondInfo') }}
        a.contacts__link(
          href='skype:live:49e0fc42cb1a2f1c?call'
          target='_blank'
          rel='noopener noreferrer nofollow'
          ) live:49e0fc42cb1a2f1c
      .contacts__info
        h3.contacts__desc {{ $t('pageFooter.thirdInfo') }}
        a.contacts__link(
          href='https://hh.ru/resume/c9e34aa2ff05e9e6730039ed1f31514c637330'
          target='_blank'
          rel='noopener noreferrer nofollow'
          title='HeadHunter'
          ) {{ $t('pageFooter.name') }} (hh.ru)
</template>

<script>
  export default {
    name: 'AppContacts',
  };
</script>

<style lang="sass">
  @import "AppContacts"
</style>

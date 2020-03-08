<template lang="pug">
  section#contacts.contacts
    .contacts__column
      h2.contacts__title.title {{ $t('pageFooter.title') }}
      AppSocials(
        :socials='socials'
      )
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
  import AppSocials from '@/components/ui/AppSocials/AppSocials';

  export default {
    name: 'AppContacts',
    components: { AppSocials },
    data() {
      return {
        socials: [
          {
            link: 'https://t.me/webistomin',
            name: 'Telegram',
          },
          {
            link: 'https://vk.com/webistomin',
            name: 'Vk',
          },
          {
            link: 'https://linkedin.com/in/webistomin',
            name: 'LinkedIn',
          },
          {
            link: 'https://github.com/webistomin',
            name: 'GitHub',
          },
        ],
      };
    },
  };
</script>

<style lang="sass">
  @import "AppContacts"
</style>

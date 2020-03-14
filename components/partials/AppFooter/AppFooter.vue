<template lang="pug">
  footer.page-footer(role='contentinfo')
    .container.page-footer__container
      AppContacts(data-animation='fade-up')
      .page-footer__copyright
        p.page-footer__copyright-text ©{{new Date().getUTCFullYear()}} {{ $t('pageFooter.copyright') }}
</template>

<script>
  import AppContacts from '@/components/ui/AppContacts/AppContacts';

  export default {
    name: 'AppFooter',
    components: { AppContacts },
  };
</script>

<style lang="sass">
  @import "AppFooter"
</style>

<template lang="pug">
  footer.page-footer(role='contentinfo')
    .container.page-footer__container
      AppContacts
      .page-footer__copyright
        p.page-footer__copyright-text {{ $t('pageFooter.copyright') }}
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

<template lang="pug" functional>
  section.app-error
    h1.app-error__title.title {{props.code}}
    nuxt-link(:to='parent.$store.state.locale === "ru" ? "/" : "/en"').app-error__link.link {{parent.$t("error.home")}}
</template>

<script>
  export default {
    name: 'AppError',
    props: {
      code: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style lang="sass">
  @import "./AppError"
</style>

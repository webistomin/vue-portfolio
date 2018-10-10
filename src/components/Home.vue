<template>
  <div>
    <page-header></page-header>
    <main class="page-content">
      <div class="container">
        <about></about>
        <portfolio></portfolio>
      </div>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from './PageHeader';
  import About from './About';
  import Portfolio from './Portfolio';
  import PageFooter from './PageFooter';

  export default {
    name: 'Home',
    components: {
      PageFooter,
      PageHeader,
      About,
      Portfolio,
    },
  };
</script>

<style>

</style>

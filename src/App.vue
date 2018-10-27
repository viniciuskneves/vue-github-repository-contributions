<template>
  <div class="container-fluid">
    <main-view />
  </div>
</template>

<script>
import MainView from '@/views/MainView.vue';

export default {
  name: 'App',
  components: {
    MainView,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

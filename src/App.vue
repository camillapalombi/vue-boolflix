<template>
  <div id="app">
    <!--HEADER-->
    <header-boolflix />
    <!--MAIN-->
    <main-boolflix />

  </div>
</template>

<script>
import HeaderBoolflix from '../src/components/HeaderBoolflix.vue';
import MainBoolflix from '../src/components/MainBoolflix.vue';

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

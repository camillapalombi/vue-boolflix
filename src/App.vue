<template>
  <div id="app">
    <!--HEADER-->
    <header-boolflix @film-inserted="SetFilmSrc"/>
    <!--MAIN-->
    <main-boolflix :string-search-film="stringSearchFilm"/>

  </div>
</template>

<script>
import HeaderBoolflix from '../src/components/HeaderBoolflix.vue';
import MainBoolflix from '../src/components/MainBoolflix.vue';

export default {
  name: 'App',
  data () {
    return {
      stringSearchFilm: '',
    }
  },
  components: {
    HeaderBoolflix,
    MainBoolflix,
  },
  methods: {
    SetFilmSrc(filmArguments) {
      console.log(filmArguments)
      this.stringSearchFilm = filmArguments;
    },
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

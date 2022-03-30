<template>
  <div id="app">
    <!--HEADER-->
    <header-boolflix @film-inserted="SetFilmSrc"/>
    <!--MAIN-->
    <main-boolflix :caracther-films="caractherFilms" :caracther-series="caractherSeries"/>

  </div>
</template>

<script>
import HeaderBoolflix from '../src/components/HeaderBoolflix.vue';
import MainBoolflix from '../src/components/MainBoolflix.vue';
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      caractherFilms: [],
      caractherSeries: [],
    }
  },
  components: {
    HeaderBoolflix,
    MainBoolflix,
  },
  methods: {
    SetFilmSrc(stringSearchFilm) {
      if (stringSearchFilm != '') {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f0f1cb86088f95987911722d21959f7&language=en-US&query=${stringSearchFilm}&page=1&include_adult=false`).then((response) => {
          this.caractherFilms = response.data.results;
          console.log(this.caractherFilms);
        });
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=7f0f1cb86088f95987911722d21959f7&language=en-US&query=${stringSearchFilm}&page=1&include_adult=false`).then((response) => {
          this.caractherSeries = response.data.results;
          console.log(this.caractherSeries);
      });
      }
    },

  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

</style>

<template>
  <main>
      
      <vue-flag code='fr' size='small'/> <!--prova bandiera-->

      <section class="section-films">
          <h2>FILMS</h2>
          <box-film v-for="films in caractherFilms" :key="films.id" :data-films="films" />
      </section>

      <section class="section-series">
          <h2>SERIE TV</h2>
          <box-serie-tv v-for="series in caractherSeries" :key="series.id" :data-series="series"/>
      </section>
  </main>
</template>

<script>
import BoxFilm from './BoxFilm.vue';
import BoxSerieTv from './BoxSerieTv.vue';
import axios from 'axios';

export default {
name: 'MainBoolflix',
data () {
    return {
        caractherFilms: null,
        caractherSeries: null,
    }
},
components: {
    BoxFilm,
    BoxSerieTv,
},
props: {
    stringSearchFilm: String
},
  created () {
      setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f0f1cb86088f95987911722d21959f7&language=en-US&query=${this.stringSearchFilm}&page=1&include_adult=false`).then((response) => {
          this.caractherFilms = response.data.results;
          console.log(this.caractherFilms);
        });
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=7f0f1cb86088f95987911722d21959f7&language=en-US&query=${this.stringSearchFilm}&page=1&include_adult=false`).then((response) => {
          this.caractherSeries = response.data.results;
          console.log(this.caractherSeries);
      });
    }, 6000)},
}


</script>

<style scoped lang="scss">
main {
    background-color: rgb(128, 128, 128);
    min-height: calc(100vh - 5rem);
    display: flex;
}
section {
    width: 50%;
    text-align: center;
    h2 {
        margin-top: 15px;
    }
}
.section-films {
    border-right: 5px solid rgb(255, 0, 0);
}
</style>
<template>
  <main>
      <box-film />
  </main>
</template>

<script>
import BoxFilm from './BoxFilm.vue';
import axios from 'axios';

export default {
name: 'MainBoolflix',
data () {
    return {
        caractherFilms: null
    }
},
components: {
    BoxFilm
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
  }, 6000)}
}
</script>

<style scoped lang="scss">
main {
    background-color: rgb(94, 94, 94);
    min-height: calc(100vh - 5rem);
}
</style>
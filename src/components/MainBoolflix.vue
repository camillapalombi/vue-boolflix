<template>
  <main>
      <section class="section-films">
          <h2>MOVIE</h2>
          <div class="container-single-box">
            <div class="no-results" v-if="caractherFilms.length == 0"> Questa ricerca non ha prodotto risultati! </div>
            <box-film v-else v-for="films in caractherFilms" :key="films.id" :data-films="films" />
          </div>
      </section>

      <section class="section-series">
        <h2>SERIE TV</h2>
        <div class="container-single-box">
            <div class="no-results" v-if="caractherSeries.length == 0">Questa ricerca non ha prodotto risultati!</div>
            <box-serie-tv v-else v-for="series in caractherSeries" :key="series.id" :data-series="series"/>
        </div>
      </section>
  </main>
</template>

<script>
import BoxFilm from './BoxFilm.vue';
import BoxSerieTv from './BoxSerieTv.vue';

export default {
    name: 'MainBoolflix',
    components: {
        BoxFilm,
        BoxSerieTv,
    },
    props: {
        caractherFilms: Array,
        caractherSeries: Array,
    }
}


</script>

<style scoped lang="scss">
main {
    background-color: #404e5c;
    min-height: calc(100vh - 5rem);
    display: flex;
}
section {
    width: 50%;
    text-align: center;
    h2 {
        margin-top: 15px;
        font-size: 30px;
        color: white;
    }
}
.no-results {
    font-size: 30px;
    margin-top: 30px;
}

.container-single-box {
    width: 710px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
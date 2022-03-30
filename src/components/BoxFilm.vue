<template>
  <div class="container-films">
      
      <img :src="`https://image.tmdb.org/t/p/w185/${dataFilms.poster_path}`" :alt="dataFilms.original_title">
      <h3 class="title">Titolo: {{ dataFilms.title}}</h3>
      <h3 class="original-title">Titolo originale: {{ dataFilms.original_title}}</h3>
      <div class="lenguage" v-if="dataFilms.original_language == 'en'"> <vue-flag code='gb' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'it'"> <vue-flag code='it' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ja'"> <vue-flag code='jp' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ko'"> <vue-flag code='kr' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'es'"> <vue-flag code='es' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'zh'"> <vue-flag code='cn' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'fr'"> <vue-flag code='fr' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'de'"> <vue-flag code='de' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'pt'"> <vue-flag code='pt' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ru'"> <vue-flag code='ru' size='medium'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'hi'"> <vue-flag code='in' size='medium'/> </div>
      <div class="lenguage" v-else > Lingua: {{ dataFilms.original_language }}</div>

      <div class="rating">Voto: {{ dataFilms.vote_average}}</div>

  </div>
</template>

<script>
export default {
name: 'BoxFilm',
props: {
    dataFilms: Object
},
}

</script>

<style scoped lang="scss">
.container-films {
    margin: 40px auto;
}
</style>
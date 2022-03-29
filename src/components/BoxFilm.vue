<template>
  <div class="container-films">

      <h3 class="title">Titolo: {{ dataFilms.title}}</h3>
      <h3 class="original-title">Titolo originale: {{ dataFilms.original_title}}</h3>
      <div class="lenguage" v-if="dataFilms.original_language == 'en'"> <vue-flag code='gb' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'it'"> <vue-flag code='it' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ja'"> <vue-flag code='jp' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ko'"> <vue-flag code='kr' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'es'"> <vue-flag code='es' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'zh'"> <vue-flag code='cn' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'fr'"> <vue-flag code='fr' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'de'"> <vue-flag code='de' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'pt'"> <vue-flag code='pt' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'ru'"> <vue-flag code='ru' size='small'/> </div>
      <div class="lenguage" v-else-if="dataFilms.original_language == 'hi'"> <vue-flag code='in' size='small'/> </div>
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
<template>
  <div class="container-series">

      <h3 class="title">Titolo: {{ dataSeries.name}}</h3>
      <h3 class="original-title">Titolo originale: {{ dataSeries.original_name}}</h3>

      <div class="lenguage" v-if="dataSeries.original_language == 'en'"> <vue-flag code='gb' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'it'"> <vue-flag code='it' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'ja'"> <vue-flag code='jp' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'ko'"> <vue-flag code='kr' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'es'"> <vue-flag code='es' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'zh'"> <vue-flag code='cn' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'fr'"> <vue-flag code='fr' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'de'"> <vue-flag code='de' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'pt'"> <vue-flag code='pt' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'ru'"> <vue-flag code='ru' size='small'/> </div>
      <div class="lenguage" v-else-if="dataSeries.original_language == 'hi'"> <vue-flag code='in' size='small'/> </div>
      <div class="lenguage" v-else > Lingua: {{ dataSeries.original_language }}</div>

      <div class="rating">Voto: {{ dataSeries.vote_average}}</div>

  </div>
</template>

<script>
export default {
name: 'BoxSerieTv',
props: {
    dataFilms: Object,
    dataSeries: Object,
}
}
</script>

<style scoped lang="scss">
.container-series {
    margin: 40px;
}
</style>
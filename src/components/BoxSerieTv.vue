<template>
  <div class="container-series">

      <h3 class="title">Titolo: {{ dataSeries.name}}</h3>
      <h3 class="original-title">Titolo originale: {{ dataSeries.original_name}}</h3>
      <div class="lenguage">Lingua: {{ dataSeries.original_language}} </div>
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
    margin: 40px auto;
}
</style>
<template>
  <div class="container-films">

      <h2 class="title">Titolo: {{ dataFilms.title}}</h2>
      <h3 class="original-title">Titolo originale: {{ dataFilms.original_title}}</h3>
      <div class="lenguage">Lingua: {{ dataFilms.original_language}} </div>
      <div class="rating">Voto: {{ dataFilms.vote_average}}</div>

  </div>
</template>

<script>
export default {
name: 'BoxFilm',
props: {
    dataFilms: Object
}
}
</script>

<style scoped lang="scss">

</style>
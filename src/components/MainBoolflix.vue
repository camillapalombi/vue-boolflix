<template>
  <main>
      <box-film />
  </main>
</template>

<script>
import BoxFilm from './BoxFilm.vue';
export default {
name: 'MainBoolflix',
components: {
    BoxFilm
},
props: {
    stringSearchFilm: String
  },
}
</script>

<style scoped lang="scss">
main {
    background-color: rgb(94, 94, 94);
    min-height: calc(100vh - 5rem);
}
</style>
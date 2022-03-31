<template>
  <header>

      <h1>BOOLFLIX</h1>

      <div class="container-search">
          <input class="input-search" type="text" placeholder="Cosa vuoi guardare?" v-model="stringSearchFilm" @keyup.enter="functionSearch()">
          <button class="btn-search" @click="functionSearch()">Cerca</button>
      </div>

  </header>
</template>

<script>
export default {
name: 'HeaderBoolflix',
data () {
    return {
        stringSearchFilm: '',
    }
},
methods: {
    functionSearch() {
        this.$emit('film-inserted', this.stringSearchFilm);
    }
}
}
</script>

<style scoped lang="scss">

header {
    height: 5rem;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        color: red;
        font-size: 38px;
        cursor: pointer;
    }
    .input-search {
        height: 30px;
        width: 200px;
        padding: .3rem;
        border-radius: 7px;
    }
    .btn-search {
        color: white;
        background-color: red;
        padding: .5rem 1.3rem;
        border: none;
        border-radius: 7px;
        font-size: 16px;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
            background-color: rgb(255, 83, 83);
        }
    }
}
</style>
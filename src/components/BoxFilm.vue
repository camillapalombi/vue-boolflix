<template>
  <div class="container-films">

      <!--FLIP BOX-->
      <div class="flip-box">
        <div class="flip-box-inner">
            <!--FRONTE-->
            <div class="flip-box-front">

                <!--POSTER FILM-->
                <img class="poster-film" :src="`https://image.tmdb.org/t/p/w342/${dataFilms.poster_path}`" :alt="dataFilms.original_title" v-if="dataFilms.poster_path != null">
                <div class="poster-null" v-else>POSTER NON DISPONIBILE</div>
            </div>

            <!--RETRO-->
            <div class="flip-box-back">

                <!--TITOLI-->
                <h3 class="title">TITOLO: {{ dataFilms.title}}</h3>
                <h3 class="original-title">TITOLO ORIGINALE: {{ dataFilms.original_title}}</h3>
                <!--LINGUE-->
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
                <!--VOTI-->
                <div class="rating" v-if="Math.ceil(dataFilms.vote_average /2) == 1"><span class="stars"> <font-awesome-icon icon="fa-solid fa-star" /> </span></div>
                <div class="rating" v-else-if="Math.ceil(dataFilms.vote_average /2) == 2"><span class="stars"> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> </span></div>
                <div class="rating" v-else-if="Math.ceil(dataFilms.vote_average /2) == 3"><span class="stars"> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /></span></div>
                <div class="rating" v-else-if="Math.ceil(dataFilms.vote_average /2) == 4"><span class="stars"> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /></span></div>
                <div class="rating" v-else-if="Math.ceil(dataFilms.vote_average /2) == 5"><span class="stars"> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /></span></div>
                <div class="rating" v-else > Film non ancora votato <i class="fa-regular fa-star"></i> </div>
                <!--TRAMA-->
                <div class="overview">{{dataFilms.overview}}</div>

            </div>
        </div>
    </div>
      

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
    margin: 50px auto;
}
.poster-null {
    font-size: 18px;
    color: red;
    font-weight: bold;
}
.poster-film {
    height: 513px;
}
.stars {
    color: yellow;
    font-size: 20px;
}
/*FLIP BOX*/
.flip-box {
  background-color: transparent;
  width: 342px;
  height: 513px;
  perspective: 1000px;
}
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-box-front {
  background-color: #bbb;
  color: black;
}
.flip-box-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: auto;
}
</style>
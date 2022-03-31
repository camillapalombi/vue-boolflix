<template>
  <div @mouseenter="findActors()" class="container-films">

      <!--FLIP BOX-->
      <div class="flip-box">
        <div class="flip-box-inner">
            <!--FRONTE-->
            <div class="flip-box-front">

                <!--POSTER FILM-->
                <img class="poster-film" :src="`https://image.tmdb.org/t/p/w342/${dataFilms.poster_path}`" :alt="dataFilms.original_title" v-if="dataFilms.poster_path != null">
                <img class="poster-null" v-else src="../assets/img/netflix.webp" alt="netflix poster">
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
                <div class="rating">
                            <!--stelle gialle piene-->
                    <font-awesome-icon class="stars-solid"
                    v-for="i in Math.ceil(dataFilms.vote_average /2)"
                    :key="'pieni' + i"
                    icon="fas fa-star star-solid"/>
                            <!--stelle bianche vuote-->
                    <font-awesome-icon class="stars-empty"
                    v-for="i in (5 - Math.ceil(dataFilms.vote_average /2))"
                    :key="'vuoti' + i"
                    icon="fa-regular fa-star star-regular"/>
                </div>
                <!--TRAMA-->
                <div class="overview">{{dataFilms.overview}}</div>
                <!--ATTORI-->
                <div v-if="filmCast != null" class="actors-films"> ATTORI:
                  <div>{{ filmCast[0].name + ", " + filmCast[1].name + ", " + filmCast[2].name + ", " + filmCast[3].name + ", " + filmCast[4].name }}</div>
                </div>

            </div>
        </div>
    </div>
      

  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'BoxFilm',
data () {
  return {
    filmCast: null,
  }
},
props: {
    dataFilms: Object
},
methods: {
    findActors() {
      axios.get("https://api.themoviedb.org/3/movie/" + this.dataFilms.id + "/credits?api_key=7f0f1cb86088f95987911722d21959f7&language=it-IT")
        .then((response) => {
          this.filmCast = response.data.cast;
        });
    }
    },
}

</script>

<style scoped lang="scss">
.container-films {
    margin: 50px auto;
}
.poster-null {
    width: 342px;
    height: 513px;
}
.poster-film {
    height: 513px;
    width: 342px;
}
.stars-solid {
    color: yellow;
    font-size: 20px;
}
.stars-empty {
    color: white;
    font-size: 20px;
}
.title , .actors-films {
  margin-top: 15px;
  margin-bottom: 15px;
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
  justify-content: space-between;
  overflow-y: auto;
}
</style>
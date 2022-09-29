<template>
  <!-- SECTION CONTAINER -->
  <section class="container-section" id="boolean">

    <div class="container-general">

      <SectionTitle
      :title="title"
      :css="css"/>

      <!-- CAROUSEL 3D -->
      <carousel-3d>
        <slide v-for="(object, index) in projects" :key="index" :index="index">
          <img :src="require(`../assets/projects-images/${object.image}`)" :alt="object.title" @click="changeCurrentSlide(index)">
        </slide>
      </carousel-3d>
      <!-- /CAROUSEL 3D -->

      <!-- CAROUSEL CONTROLLERS AND DESCRIPTION -->
      <div class="descritpion">
        <p class="slide-text">
          {{ changeSlideDescritpion }}
        </p>
      </div>
      <!-- /CAROUSEL CONTROLLERS AND DESCRIPTION -->

    </div>

  </section>
  <!-- /SECTION CONTAINER -->
</template>

<script>
  import Vue from 'vue';
  import Carousel3d from 'vue-carousel-3d';
  Vue.use(Carousel3d);
  import SectionTitle from '../components/SectionTitle.vue';

  export default {
    name: "BooleanSection",
    components: {
      SectionTitle,
    },
    props: {
      title: String,
      css: String,
    },
    data: function() {
      return {
        currentSlide: 0,
        booleanTitle: "Lavori Boolean",
        projects : [
        {
            title: "Bool B&B",
            image: "bool-b&b.jpg",
            description: "Il progetto finale del corso. Realizzato collaborando con altre tre persone abbiamo sviluppato una replica semplificata di AirBnB con la possibilità da parte di un utente registrato di aggiungere / modificare / rimuovere un appartamento. E' possibile inoltre visualizzare le statistiche relative alle visualizzazioni dei propri appartamenti, modificarne la visibilità agli utenti oppure sponsolizzarlo per far si che compaia in cima alla ricerca degli utenti."
          },
          {
            title: "Playstation",
            image: "playstation.jpg",
            description: "",
          },
          {
            title: "Boolflix",
            image: "boolflix.jpg",
            description: "",
          },
          {
            title: "DC-Comics",
            image: "comics.jpg",
            description: "",
          },
          {
            title: "Azienda Spedizioni",
            image: "spedizioni.jpg",
            description: "",
          },
          {
            title: "Boolzap",
            image: "boolzap.jpg",
            description: "",
          },
          {
            title: "Dropbox",
            image: "dropbox.jpg",
            description: "",
          },
          {
            title: "Discord",
            image: "discord.jpg",
            description: "",
          },
          {
            title: "Spotify",
            image: "spotify.jpg",
            description: "",
          },
        ]
      }
    },
    methods: {
      changeCurrentSlide(index) {
        console.log('click', index);
        this.currentSlide = index;
      },
    },
    computed: {
      changeSlideDescritpion() {
        return this.projects[this.currentSlide].description;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/_variables.scss";
  @import "../style/_mixin.scss";

  .container-section {
    @include container-section();
    @include boolean-background-gradient-color();
    // background-color: $primary;

    .container-general {
      @include container-general();

      .slide-text {
        text-align: center;
      }
    }
  }
</style>
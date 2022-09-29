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
          <img :src="require(`../assets/projects-images/${object.image}`)" :alt="object.title" @click="changeCurrentSlideIndex(index)">
        </slide>
      </carousel-3d>
      <!-- /CAROUSEL 3D -->

      <!-- CAROUSEL CONTROLLERS AND DESCRIPTION -->
      <div class="description">
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
        currentSlideIndex: 0,
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
            description: "lorem ipsum dolor sit amet1",
          },
          {
            title: "Boolflix",
            image: "boolflix.jpg",
            description: "lorem ipsum dolor sit amet2",
          },
          {
            title: "DC-Comics",
            image: "comics.jpg",
            description: "lorem ipsum dolor sit amet3",
          },
          {
            title: "Azienda Spedizioni",
            image: "spedizioni.jpg",
            description: "lorem ipsum dolor sit amet4",
          },
          {
            title: "Boolzap",
            image: "boolzap.jpg",
            description: "lorem ipsum dolor sit amet5",
          },
          {
            title: "Dropbox",
            image: "dropbox.jpg",
            description: "lorem ipsum dolor sit amet6",
          },
          {
            title: "Discord",
            image: "discord.jpg",
            description: "lorem ipsum dolor sit amet7",
          },
          {
            title: "Spotify",
            image: "spotify.jpg",
            description: "lorem ipsum dolor sit amet8",
          },
        ]
      }
    },
    methods: {
      changeCurrentSlideIndex(index) {
        this.currentSlideIndex = index;
      },
    },
    computed: {
      changeSlideDescritpion() {
        return this.projects[this.currentSlideIndex].description;
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

      .description {
        width: 100%;
        display: flex;
        justify-content: center;

        .slide-text {
          width: 362px;
          text-align: center;
          font-size: .8rem;
          padding: 1rem;
          border: 1px solid grey;
          border-radius: 50px;
          background-color: white;
          color: $secondary;
        }
      }
    }
  }
</style>
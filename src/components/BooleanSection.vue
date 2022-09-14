<template>
  <!-- CONTAINER -->
  <section class="container-section" id="boolean">

    <SectionTitle
    :title="title"
    :css="css"/>

    <!-- CAROUSEL 3D -->
    <carousel-3d>
      <slide v-for="(object, index) in projects" :key="index" :index="index">
        <img :src="require(`../assets/projects-images/${object.image}`)" alt="">
      </slide>
    </carousel-3d>
    <!-- /CAROUSEL 3D -->

  </section>
  <!-- /CONTAINER -->
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
        booleanTitle: "Lavori Boolean",
        projects : [
        {
            title: "Bool B&B",
            image: "bool-b&b.jpg",
          },
          {
            title: "Playstation",
            image: "playstation.jpg",
          },
          {
            title: "Boolflix",
            image: "boolflix.jpg",
          },
          {
            title: "DC-Comics",
            image: "comics.jpg",
          },
          {
            title: "Azienda Spedizioni",
            image: "spedizioni.jpg",
          },
          {
            title: "Boolzap",
            image: "boolzap.jpg",
          },
          {
            title: "Dropbox",
            image: "dropbox.jpg",
          },
          {
            title: "Discord",
            image: "discord.jpg",
          },
          {
            title: "Spotify",
            image: "spotify.jpg",
          },
        ]
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
  }
</style>
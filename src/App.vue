<template>
  <div id="app">

    <!-- HEADER -->
    <AppHeader/>
    <!-- /HEADER -->

    <!-- CAROUSEL 3D -->
    <carousel-3d>
      <slide v-for="(object, index) in projects" :key="index" :index="index">
        <img :src="require(`./assets/projects-images/${object.image}`)" alt="">
      </slide>
    </carousel-3d>
    <!-- /CAROUSEL 3D -->

  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import Vue from 'vue';
  import Carousel3d from 'vue-carousel-3d';

  Vue.use(Carousel3d);

  export default {
    name: 'App',
    components: {
      AppHeader,
    },
    data: function() {
      return {
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

<style lang="scss">
  @import "./style/_variables.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: $primary;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

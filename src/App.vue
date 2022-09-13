<template>
  <div id="app">

    <!-- HEADER -->
      <AppHeader/>
    <!-- /HEADER -->

    <!-- ABOUT ME SECTION -->
    <AboutmeSection :title="aboutmeTitle"/>
    <!-- /ABOUT ME SECTION -->

    <!-- BOOLEAN SECTION -->
    <BooleanSection :title="booleanTitle"/>
    <!-- /BOOLEAN SECTION -->


  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import BooleanSection from "./components/BooleanSection.vue";
  import AboutmeSection from "./components/AboutmeSection.vue";

  export default {
    name: 'App',
    components: {
    AppHeader,
    BooleanSection,
    AboutmeSection
},
  data: function() {
    return {
      aboutmeTitle: "Su di me",
      booleanTitle: "Lavori Boolean",
    }
  }
}
</script>

<style lang="scss">
  // GOOGLE FONTS Press Start 2P
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  @import "./style/_variables.scss";
  @import "./style/common.scss";
</style>

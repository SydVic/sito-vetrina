<template>
  <div id="app">

    <!-- HEADER -->
      <AppHeader/>
    <!-- /HEADER -->

    <!-- BOOLEAN SECTION -->
    <BooleanSection
    :title="booleanTitle"
    :css="booleanCssClass"/>
    <!-- /BOOLEAN SECTION -->

    <!-- ABOUT ME SECTION -->
    <AboutmeSection
    :title="aboutmeTitle"
    :css="aboutmeCssClass"/>
    <!-- /ABOUT ME SECTION -->

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
      aboutmeCssClass: "aboutme-title",
      booleanTitle: "Lavori Boolean",
      booleanCssClass: "boolean-title",
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

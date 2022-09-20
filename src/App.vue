<template>
  <div id="app">

    <!-- HEADER -->
    <AppHeader/>
    <!-- /HEADER -->

    <!-- ABOUT ME SECTION -->
    <AboutmeSection
    :title="aboutmeTitle"
    />
    <!-- /ABOUT ME SECTION -->

    <!-- BOOLEAN SECTION -->
    <BooleanSection
    :title="booleanTitle"
    />
    <!-- /BOOLEAN SECTION -->

    <SkillsSection
    :title="skillsTitle"
    />

    <!-- FOOTER -->
    <AppFooter/>
    <!-- /FOOTER -->

  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import BooleanSection from "./components/BooleanSection.vue";
  import AboutmeSection from "./components/AboutmeSection.vue";
  import SkillsSection from "./components/SkillsSection.vue";
  import AppFooter from "./components/AppFooter.vue";

  export default {
    name: 'App',
    components: {
    AppHeader,
    BooleanSection,
    AboutmeSection,
    SkillsSection,
    AppFooter,
},
  data: function() {
    return {
      aboutmeTitle: "Su di me",
      // aboutmeCssClass: "aboutme-title",
      booleanTitle: "Lavori Boolean",
      // booleanCssClass: "boolean-title",
      skillsTitle: "Skills",
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

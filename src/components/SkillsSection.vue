<template>
  <!-- SECTION CONTAINER -->
  <section class="container-section" id="skills">

    <div class="container-general">

      <SectionTitle
      :title="title"
      :css="css"/>

    </div>

  </section>
  <!-- /SECTION CONTAINER -->
</template>

<script>
  import SectionTitle from '../components/SectionTitle.vue';
  export default {
    name: "SkillsSection",
    components: {
      SectionTitle,
    },
    props: {
      title: String,
      css: String,
    },
  }
</script>

<style lang="scss" scoped>
  @import "../style/_variables.scss";
  @import "../style/_mixin.scss";

  .container-section {
    @include container-section();
    background-color: $primary;

    .container-general {
      @include container-general();
    }
  }
</style>
<template>
  <section class="container-section" id="about-me">
    <SectionTitle
    :title="title"
    :css="css"/>
  </section>
</template>

<script>
  import SectionTitle from '../components/SectionTitle.vue';
  
  export default {
    name: "AboutmeSection",
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
    // @include aboutme-background-gradient-color();
    background-color: $primary;
  }

</style>
<template>
  <div>
    <h1 class="title" :class="css">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
    css: String
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/_variables.scss";
  @import "../style/_mixin.scss";
  
  .title {
    text-align: center;
    font-size: 2rem;
  }

  .aboutme-title {
    @include aboutme-gradient-color();
    @include text-gradient-attributes();
  }

  .boolean-title {
    @include boolean-gradient-color();
    @include text-gradient-attributes();
  }
</style>
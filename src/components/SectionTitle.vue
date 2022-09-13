<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/_variables.scss";
  @import "../style/_mixin.scss";
  
  .title {
    text-align: center;
    font-size: 3rem;
    @include boolean-gradient-color();
    @include text-gradient-attributes();
  }
</style>
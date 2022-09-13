<template>
  <div class="container">
    <SectionTitle
    :title="title"
    :css="css"/>
  </div>
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

</style>
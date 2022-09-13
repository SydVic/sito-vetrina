<template>
  <div class="container">
    <SectionTitle :title="title"/>
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
      },
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: white;
  }

</style>
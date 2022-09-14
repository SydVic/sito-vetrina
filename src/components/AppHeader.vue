<template>
  <!-- HEADER -->
  <section class="header">

    <!-- CONTAINER -->
    <div class="container">

      <!-- AVATAR -->
      <div class="img-wrapper">
        <img src="../assets/avatar/metal slug character.webp" alt="">
      </div>
      <!-- /AVATAR -->

      <!-- NAV LINKS -->
      <ul class="nav-links">
        <li>
          <a href="#about-me">
            About me
          </a>
        </li>
        <li>
          <a href="#boolean">
            Boolean
          </a>
        </li>
      </ul>
      <!-- NAV LINKS -->

    </div>
    <!-- /CONTAINER -->
  </section>
  <!-- /HEADER -->
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
  @import "../style/_mixin.scss";
  @import "../style/_variables.scss";

  .header {
    width: 100%;
    height: $header-height;
    background-color: $primary;
    border-bottom: 3px solid $secondary;
    padding: 0 2rem;

    .container {
      height: 100%;
      @include flex-row-center-center();

      .img-wrapper {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: auto;
      }

      .nav-links {
        list-style: none;
        @include flex-row-justify-center();

        li {
          margin: 0 1.5rem;
          padding: .3rem 1rem;
          border: 3px solid $secondary;

          a {
            text-decoration: none;
            color: $secondary;
            padding: .3rem;
          }
        }
      }
    }
  }
</style>
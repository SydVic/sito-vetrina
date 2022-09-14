<template>
  <!-- HEADER -->
  <section class="header">
    <!-- CONTAINER -->
    <div class="container-general">
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

    .container-general {
      @include container-general();
      @include flex-row-center-center();

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
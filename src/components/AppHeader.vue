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
        <!-- SCHERMO LG -->
        <li class="lg">
          <a href="#about-me">
            Me
          </a>
        </li>
        <li class="lg">
          <a href="#boolean">
            Boolean
          </a>
        </li>
        <!-- /SCHERMO LG -->

        <!-- SCHERMO MD -->
        <li class="md">
          <a href="#about-me">
            <font-awesome-icon icon="fa-solid fa-user-astronaut" />
          </a>
        </li>
        <li class="md">
          <a href="#boolean">
            <font-awesome-icon icon="fa-solid fa-code" />
          </a>
        </li>
        <!-- /SCHERMO MD -->
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

      ul.nav-links {
        @include flex-row-justify-center();

        li {
          margin: 0 1.5rem;
          // padding: .3rem 1rem;
          border: 3px solid $secondary;
          font-size: .7rem;
          color: $secondary;

          a {
            display: block;
            text-decoration: none;
            color: $secondary;
            padding: .3rem 1rem;
          }

          &.md {
            display: none;
          }
        }

        @media (max-width: $breakpoint-md) {
          li {
            margin: 0 .3rem;

            &.lg {
            display: none;
            }

            &.md {
              display: block;
            }           
          }
        }
      }
    }
  }
 
</style>
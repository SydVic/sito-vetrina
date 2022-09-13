<template>
  <!-- HEADER -->
  <section class="header">
    <!-- CONTAINER -->
    <div class="container">
      <!-- NAV LINKS -->
      <ul class="nav-links">
        <li>
          <a href="">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="">
            WORKS
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
  // GOOGLE FONTS Press Start 2P
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  @import "../style/_variables.scss";

  .header {
    width: 100%;
    height: $header-height;
    margin-bottom: 2rem;
    background-color: $primary;
    border-bottom: 3px solid $secondary;
    font-family: 'Press Start 2P', cursive;

    .container {
      width: $container-width;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .nav-links {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;

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
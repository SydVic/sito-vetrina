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
@import "../style/variables.scss";

  .header {
    width: 100%;
    height: $header-height;
    background-color: $primary;

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
          margin: 0 1rem;
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
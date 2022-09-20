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
        <li v-for="(item, index) in headerLg" :key="index" class="lg">
          <a :href="item.href">
            {{ item.title }}
          </a>
        </li>
        <!-- /SCHERMO LG -->

        <!-- SCHERMO MD -->
        <li v-for="(item, index) in headerMd" :key="'A' + index"  class="md">
          <a :href="item.href">
            <font-awesome-icon :icon="item.icon"/>
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
  name: 'AppHeader',
  data() {
    return {
      headerLg: [
        {
          title: "Me",
          href: "#about-me",
        },
        {
          title: "Boolean",
          href: "#boolean",
        },
        {
          title: "Skills",
          href: "#skills"
        },
        {
          title: "Links",
          href: "#links",
        },
      ],
      headerMd: [
        {
          href: "#about-me",
          icon: "fa-solid fa-user-astronaut",
        },
        {
          href: "#boolean",
          icon: "fa-solid fa-code",
        },
        {
          href: "#skills",
          icon: "fa-solid fa-user-gear",
        },
        {
          href: "#links",
          icon: "fa-solid fa-link",
        },
      ],
    }
  }
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
          margin: 0 .5rem;
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
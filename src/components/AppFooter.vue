<template>
  <section class="footer" id="links">
    <div class="container">
      <ul class="contacts">
        <li v-for="(item, index) in contacts" :key="index">
          <a :href="item.link">
            <font-awesome-icon :icon="item.icon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      contacts: [
        {
          name: "Git Hub",
          icon: "fa-brands fa-github",
          link: "https://github.com/SydVic"
        },
        {
          name: "Linkedin",
          icon: "fa-brands fa-linkedin",
          link: "https://www.linkedin.com/in/fabrizio-bocca-20aa98245/"
        },
        // {
        //   name: "gmail",
        //   icon: "fa-brands fa-google",
        // },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/_mixin.scss";
  @import "../style/_variables.scss";

  .footer {
    width: 100%;
    height: $footer-height;
    background-color: $primary;
    border-top: 3px solid $secondary;
    padding: 0 2rem;

    .container {
    height: 100%;
    @include flex-row-center-center();

      ul.contacts {
        @include flex-row-justify-center();
          
        li {
          color: $secondary;
          margin: 0 2rem;
          font-size: 2rem;

          a {
            display: block;
            color: $secondary;
          }
        }
      }
    }
  }
  
  
</style>
<template>
  <!-- SECTION CONTAINER -->
  <section class="container-section" id="skills">

    <div class="container-general">

      <SectionTitle
      :title="title"
      :css="css"/>

      <ul class="skills-list">
        <li v-for="(item, index) in skills" :key="index" class="skill">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="icon" :class="item.iconColor">
            <font-awesome-icon :icon="item.icon"/>
          </div>
        </li>
      </ul>

    </div>

  </section>
  <!-- /SECTION CONTAINER -->
</template>

<script>
  import SectionTitle from '../components/SectionTitle.vue';
  export default {
    name: "SkillsSection",
    components: {
      SectionTitle,
    },
    props: {
      title: String,
      css: String,
    },
    data() {
      return {
        skills: [
          {
            title: "html",
            icon: "fa-brands fa-html5",
            iconColor: "html",
          },
          {
            title: "css",
            icon: "fa-brands fa-css3-alt",
            iconColor: "css",
          },
          {
            title: "sass",
            icon: "fa-brands fa-sass",
            iconColor: "sass",
          },
          {
            title: "bootstrap",
            icon: "fa-brands fa-bootstrap",
            iconColor: "bootstrap",
          },
          {
            title: "javascript",
            icon: "fa-brands fa-square-js",
            iconColor: "js",
          },
          {
            title: "node js",
            icon: "fa-brands fa-node",
            iconColor: "nodejs"
          },
          {
            title: "VueJS",
            icon: "fa-brands fa-vuejs",
            iconColor: "vuejs"
          },
          {
            title: "MySql",
            icon: "fa-solid fa-database",
            iconColor: "mysql"
          },
          {
            title: "php",
            icon: "fa-brands fa-php",
            iconColor: "php"
          },
          {
            title: "laravel",
            icon: "fa-brands fa-laravel",
            iconColor: "laravel"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/_variables.scss";
  @import "../style/_mixin.scss";

  .container-section {
    @include container-section();
    @include skills-background-gradient-color();

    .container-general {
      @include container-general();

      ul.skills-list {
        @include flex-row-justify-center();
        flex-wrap: wrap;

        li.skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;

          // border: 1px solid yellow;

          .title {
            color: white;
            font-size: .5rem;
          }

          .icon {
            font-size: 3.5rem;

            &.html {
              color: #e44d26;
            }

            &.css {
              color: #0271bb;
            }

            &.sass {
              color: #cd6b97;
            }

            &.bootstrap {
              color: #7709f7;
            }

            &.js {
              color: #f7df1e;
            }

            &.nodejs {
              color: #83cd29;
            }

            &.vuejs {
              color: #41b883;
            }

            &.mysql {
              color: #e48e00;
            }

            &.php {
              color: #787cb4;
            }

            &.laravel {
              color: #ff291a;
            }
          }
        }
      }
    }
  }
</style>
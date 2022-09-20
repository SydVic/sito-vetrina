// FONTAWESOME
  import { library } from '@fortawesome/fontawesome-svg-core';
  // icone header
  import { faCode, faUserAstronaut, faLink, faUserGear } from '@fortawesome/free-solid-svg-icons';
  // icone footer
  import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  // icone header
  library.add( faCode, faUserAstronaut, faLink, faUserGear );
  // icone footer
  library.add( faGithub, faLinkedin, faGoogle );

  Vue.component('font-awesome-icon', FontAwesomeIcon);
// FONTAWESOME

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

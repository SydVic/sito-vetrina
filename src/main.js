// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
// ICONE HEADER
import { faCode, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
// ICONE FOOTER
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// ICONE HEADER
library.add( faCode, faUserAstronaut );
// ICONE FOOTER
library.add( faGithub, faLinkedin, faGoogle );

Vue.component('font-awesome-icon', FontAwesomeIcon);

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

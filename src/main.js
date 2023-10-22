import Vue from 'vue'
import App from './App.vue'

import vOusideEvents from 'vue-outside-events'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faGraduationCap, faMoon, faPaperPlane, faThumbsUp, faChevronDown, faHandPointUp, faMapMarkerAlt, faAward, faPencilAlt, faChevronLeft, faChevronRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// =======
// CSS
// =======
import './assets/css/vars.css'
import './assets/css/fonts.css'
import './assets/css/components/button.css'

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Add FA icons
library.add(faGraduationCap, 
            faBriefcase,
            faMoon,
            faPaperPlane,
            faThumbsUp,
            faChevronDown,
            faHandPointUp,
            faMapMarkerAlt,
            faAward,
            faPencilAlt,
            faChevronLeft,
            faChevronRight,
            faFileAlt)

Vue.config.productionTip = false

Vue.use(vOusideEvents);

new Vue({
  render: h => h(App),
}).$mount('#app')

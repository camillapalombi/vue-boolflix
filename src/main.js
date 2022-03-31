import Vue from 'vue'
import App from './App.vue'
import VueFlag from 'vue-flag'
import 'vue-flag/dist/vue-flag.css'

Vue.component('VueFlag', VueFlag)

import { library } from '@fortawesome/fontawesome-svg-core'

import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(starSolid)
library.add(starRegular)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

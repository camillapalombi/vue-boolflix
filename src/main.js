import Vue from 'vue'
import App from './App.vue'
import VueFlag from 'vue-flag'
import 'vue-flag/dist/vue-flag.css'

Vue.component('VueFlag', VueFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

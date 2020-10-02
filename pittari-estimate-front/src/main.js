import App from './App'
import Vue from 'vue/dist/vue.esm'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App }
})

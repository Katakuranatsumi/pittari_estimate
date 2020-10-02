import App from './App.vue'
import Vue from 'vue/dist/vue.esm'
import router from './router/index'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Router from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})

export default router

import Router from 'vue-router'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'
import User from '@/views/users/User'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
     path: '/signup',
     name: 'signup',
     component: SignUp
    },
    {
     path: '/signin',
     name: 'signin',
     component: SignIn
    },
    {
     path: '/users',
     name: 'User',
     component: User
    },
  ]
})

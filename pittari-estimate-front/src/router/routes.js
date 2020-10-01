import BoardView from '@/components/BoardView.vue'
// import SignIn from '@/views/SignIn'
import SignUp from '@/components/Signup.vue'

export default [{
  path: '/',
  component: BoardView,
}, { path: '/signup',
  component: SignUp
},]

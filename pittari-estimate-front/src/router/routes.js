import SignUp from '@/components/templates/Signup.vue'
import BoardView from '@/components/templates/BoardView.vue'

export default [{
  path: '/',
  component: BoardView,
}, { path: '/signup',
  component: SignUp
},]

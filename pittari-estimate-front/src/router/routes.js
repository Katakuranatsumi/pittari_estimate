import SignUp from '@/components/templates/Signup.vue'
import BoardView from '@/components/templates/BoardView.vue'
import User from '@/components/templates/User.vue'

export default [{
  path: '/',
  component: BoardView,
}, {
  path: '/signup',
  component: SignUp
}, {
  path: '/users',
  component: User
}]

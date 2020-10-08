import SignUp from '@/components/templates/Signup.vue'
import BoardView from '@/components/templates/BoardView.vue'
import User from '@/components/templates/User.vue'
import Task from '@/components/templates/Task.vue'

export default [{
  path: '/',
  component: BoardView,
}, {
  path: '/signup',
  component: SignUp
}, {
  path: '/users',
  component: User
}, {
  path: '/tasks',
  component: Task
}]

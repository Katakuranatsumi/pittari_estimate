import SignUp from '@/components/templates/Signup.vue'
import BoardView from '@/components/templates/BoardView.vue'
import User from '@/components/templates/User.vue'
import Tasks from '@/components/templates/Tasks.vue'
import TaskFormView from '@/components/templates/TaskFormView.vue'

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
  component: Tasks
}, {
  path: '/new',
  component: TaskFormView
}]

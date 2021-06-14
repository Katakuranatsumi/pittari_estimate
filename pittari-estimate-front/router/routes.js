import SignUp from '../components/templates/Signup.vue'
import User from '../components/templates/User.vue'
import Tasks from '../components/templates/Tasks.vue'
import TaskFormView from '../components/templates/TaskFormView.vue'
import TaskDetailView from '../components/templates/TaskDetailView.vue'
import EditTaskFormView from '../components/templates/EditTaskFormView.vue'
import Top from '../components/templates/Top.vue'

export default [{
  path: '/',
  component: Top
}, {
  path: '/signup',
  component: SignUp
}, {
  path: '/users',
  component: User
}, {
  path: '/tasks',
  component: Tasks
},{
  path: '/tasks/new',
  component: TaskFormView
}, {
  path: '/tasks/:taskId',
  component: TaskDetailView
}, {
  path: '/tasks/:taskId/edit',
  component: EditTaskFormView
}]

<template>
  <div class="taskform">
    <TaskForm></TaskForm>
  </div>
</template>

<script>
import TaskForm from '@/molecules/TaskForm.vue'

export default {
  name: 'TaskFormVue',
  components: {
    TaskForm
  },
}
</script>

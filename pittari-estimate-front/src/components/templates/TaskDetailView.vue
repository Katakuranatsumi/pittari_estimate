<template>
  <div class="task-detail">
    <h2>タスク見積もり詳細</h2>
    <div>タイトル： {{ task["title"] }}</div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'TaskDetailView',
  data: function() {
    return {
      task : null
    }
  },

  mounted() {
    axios.get('/tasks/' + this.$route.params.taskId)
      .then((response) => {
        this.task = response.data
      })
      .catch((err) => {
        this.error = err.message
      })
  }
}
</script>

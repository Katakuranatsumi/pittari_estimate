<template>
  <div class="tasks">
    <h2>タスク一覧</h2>
    <li v-for="task in tasks" v-bind:key="task">
      タイトル：{{ task["title"] }}
      <br>
      詳細：{{ task["detail"] }}
    </li>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'Tasks',

  data() {
    return {
      tasks: null
    }
  },

  mounted() {
    axios.get('/tasks')
      .then((response) => {
        this.tasks = response.data
      })
      .catch((err) => {
        this.error = err.message
      })
  }
}
</script>

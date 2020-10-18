<template>
  <div class="tasks">
    <h2>タスク見積もり一覧</h2>
    <table>
      <tr>
        <th>タイトル</th>
        <th>作成日時</th>
      </tr>
      <tr v-for="(task, index) in tasks" v-bind:key="task">
        <router-link :to="{ path: 'tasks/' + taskId[index] }">{{ task["title"] }}</router-link>
        <td>{{ createdTime[index] }}</td>
      </tr>
    </table>
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

  computed: {
    createdTime: function() {
      let createdTimes = [];
      for (let i = 0, length = this.tasks.length; i < length; i++) {
        const responseCreatedTime = new Date(this.tasks[i]["created_at"]).toLocaleString();
        createdTimes.push(responseCreatedTime);
      }
      return createdTimes
    },

    taskId: function() {
      let taskIds = [];
      for (let i = 0, length = this.tasks.length; i < length; i++) {
        const responseTaskId = this.tasks[i]["id"];
        taskIds.push(responseTaskId);
      }
      return taskIds
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

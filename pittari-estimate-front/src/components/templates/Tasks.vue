<template>
  <div class="tasks">
    <h2>タスク見積もり一覧</h2>
    <vue-button>
      <font-awesome-icon icon="trash-alt"/>
    </vue-button>
    <table>
      <tr>
        <th>タイトル</th>
        <th>作成日時</th>
      </tr>
      <tr v-for="(task, index) in tasks" v-bind:key="index">
        <router-link :to="{ path: 'tasks/' + taskId[index] }">{{ task["title"] }}</router-link>
        <td>{{ createdTime[index] }}</td>
        <vue-checkbox
          :id="index"
          :value="index"
        />
      </tr>
    </table>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import VueCheckbox from '@/components/atoms/Checkbox'
import VueButton from '@/components/atoms/Button'

export default {
  name: 'Tasks',

  components: {
    VueCheckbox,
    VueButton,
  },

  data() {
    return {
      tasks: null,
      checkedTasks: []
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

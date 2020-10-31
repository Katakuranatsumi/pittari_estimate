<template>
  <div class="tasks">
    <h2>タスク見積もり一覧</h2>
    <vue-button
      :disabled="disableTaskDeleteAciton"
      @click="taskQuoteDelete"
    >
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
        <input
          :id="index"
          :value="task"
          type="checkbox"
          v-model="checkedTasks"
        />
        <span>CheckedTasks: {{ checkedTasks }}</span>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import VueButton from '@/components/atoms/Button';

export default {
  name: 'Tasks',

  components: {
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
    },

    disableTaskDeleteAciton: function() {
      if (this.checkedTasks.length === 1) {
        return false
      } else {
        return true
      }
    },
  },

  mounted() {
    axios.get('/tasks')
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((err) => {
        this.error = err.message;
      })
  },

  methods: {
    taskQuoteDelete: function() {
      axios.delete('/tasks/' + this.checkedTasks[0]["id"])
        .then(async() => {
          await this.$swal('タスク見積もりを削除しました');
          this.$router.go({path: this.$router.currentRoute.path, force: true})
        })
        .catch((err) => {
          this.error = err.message;
        })
    },
  },
}
</script>

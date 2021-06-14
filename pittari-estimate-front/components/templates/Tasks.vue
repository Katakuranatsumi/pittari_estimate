<template>
  <div class="tasks">
    <h1 class="title block">タスク見積もり一覧</h1>
    <div class="columns is-centered">
      <table class="table is-hoverable">
        <tr>
          <th>タイトル</th>
          <th>作成日時</th>
          <th>
            <vue-button
              :disabled="disableTaskDeleteAciton"
              @click="taskQuoteDelete"
            >
              <font-awesome-icon icon="trash-alt"/>
            </vue-button>
          </th>
        </tr>
        <tr v-for="(task, index) in tasks" v-bind:key="index">
          <td><router-link :to="{ path: 'tasks/' + taskId[index] }">{{ task["title"] }}</router-link></td>
          <td>{{ createdTime[index] }}</td>
          <td>
            <input
            :id="index"
            :value="task"
            type="radio"
            v-model="checkedTasks"
            />
          </td>
        </tr>
      </table>
    </div>
    <router-link :to="{ path: '/tasks/new'}"
      class="button">
      新規作成<font-awesome-icon icon="pencil-alt"/>
    </router-link>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import axios from '../../plugins/axios';
import VueButton from '../atoms/Button';

export default {
  name: 'Tasks',

  components: {
    VueButton,
  },

  data() {
    return {
      tasks: null,
      checkedTasks: ''
    }
  },

  mounted() {
    axios.get('/tasks')
      .then((response) => {
        this.tasks = response.data["tasks"];
      })
      .catch((err) => {
        this.error = err.message;
      })
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
      if (this.checkedTasks) {
        return false
      } else {
        return true
      }
    },
  },

  methods: {
    taskQuoteDelete: function() {
      this.$swal({
        title: `${this.checkedTasks["title"]}を削除してもよろしいですか？`,
        type: 'confirm',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.value) {
           axios.delete('/tasks/' + this.checkedTasks["id"])
             .then(async() => {
               await this.$swal(`「${this.checkedTasks["title"]}」を削除しました`);
               this.$router.go({path: this.$router.currentRoute.path, force: true})
             })
             .catch((err) => {
              this.error = err.message;
            })
        } else {
          this.$swal('タスク見積もりの削除をキャンセルしました')
        }
      })
    },
  },
}
</script>
<style lang="sass">

</style>

<template>
  <div class="task-detail">
    <div>
      <h2 class="title block">タスク見積もり詳細</h2>
      <div class="content is-medium">タイトル： {{ task["title"] }}</div>
      <div class="content is-medium">作成日時：{{ createdTime }}</div>
      <div class="content is-medium">詳細：{{ task["detail"] }}</div>
      <router-link
        class="button mr-1"
        :to="{ path: '/tasks/' + this.$route.params.taskId + '/edit' }">
        編集<font-awesome-icon icon="edit"/>
      </router-link>
      <router-link
        class="button"
        :to="{ path: '/tasks' }">タスク一覧画面に戻る
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from '../../plugins/axios'

export default {
  name: 'TaskDetailView',

  data: function() {
    return {
      task : '',
    }
  },

  computed: {
    createdTime: function() {
      const createdTime = new Date(this.task["created_at"]).toLocaleString();
      return createdTime
    },
  },

  mounted() {
    axios.get('/tasks/' + this.$route.params.taskId)
      .then((response) => {
        this.task = response.data["task"]
      })
      .catch((err) => {
        this.error = err.message
      })
  },
}
</script>

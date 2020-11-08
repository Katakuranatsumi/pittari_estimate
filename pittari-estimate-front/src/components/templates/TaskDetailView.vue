<template>
  <div class="task-detail">
    <h2>タスク見積もり詳細</h2>
    <div>タイトル： {{ task["title"] }}</div>
    <div>作成日時：{{ createdTime }}</div>
    <div>詳細：{{ task["detail"] }}</div>
    <form>
      <div class="form-item">
        <label for="title">タイトル：</label>
        <input
           id="title"
           type="text"
           v-model="title">
      </div>
      <div>
        <label for="detail">詳細：</label>
        <input
          id="detail"
          type="text"
          v-model="detail"
          placeholder="例：Railsでログイン機能を実装する">
      </div>
    </form>
    <font-awesome-icon icon="edit" />
    <router-link :to="{ path: '/tasks' }">タスク一覧画面に戻る</router-link>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'TaskDetailView',
  data: function() {
    return {
      task : '',
      title: '',
      detail: '',
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
        this.task = response.data
        this.title = this.task["title"]
        this.detail = this.task["detail"]
      })
      .catch((err) => {
        this.error = err.message
      })
  },
}
</script>

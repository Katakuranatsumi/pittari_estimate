<template>
  <div class="task-detail">
    <h2>タスク見積もり詳細</h2>
    <div>タイトル： {{ task["title"] }}</div>
    <div>作成日時：{{ createdTime }}</div>
    <div>詳細：{{ task["detail"] }}</div>
    <vue-button>
      <font-awesome-icon icon="edit" />
    </vue-button>
    <router-link :to="{ path: '/tasks' }">タスク一覧画面に戻る</router-link>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import VueButton from '@/components/atoms/Button';

export default {
  name: 'TaskDetailView',
  data: function() {
    return {
      task : null
    }
  },

  components: {
    VueButton,
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
      })
      .catch((err) => {
        this.error = err.message
      })
  },
}
</script>

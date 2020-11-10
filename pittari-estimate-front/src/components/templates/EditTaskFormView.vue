<template>
  <form>
    <h2>タスク見積もり編集</h2>
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
        v-model="detail">
    </div>
    <div class="form-actions">
      <vue-button
        @click="update"
      >
        更新
      </vue-button>
      <router-link :to="{ path: '/tasks/' + this.$route.params.taskId }">
        <vue-button>
          キャンセル
        </vue-button>
      </router-link>
    </div>
  </form>
</template>

<script>
import axios from '@/plugins/axios'
import VueButton from '@/components/atoms/Button'

export default {
  name: 'EditTaskFormView',

  components: {
    VueButton
  },

  data: function() {
    return {
      task : '',
      title: '',
      detail: ''
    }
  },

  methods: {
    update: function() {
      const updateTask = {
        title: this.title,
        detail: this.detail
      }
      axios.patch('/tasks/' + this.$route.params.taskId, updateTask)
        .then(() => {
          this.$router.push({ path: '/tasks' })
          alert('タスク見積もりを更新しました')
        })
        .catch(err => {
          this.error = err.message
        })
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

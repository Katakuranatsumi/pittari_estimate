<template>
  <form>
    <div class="form-item">
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model="title"
        required
        placeholder="例：ログイン機能の追加">
    </div>
    <div>
      <label for="detail">詳細</label>
      <input
        id="detail"
        type="text"
        v-model="detail"
        placeholder="例：Railsでログイン機能を実装する"
      >
    </div>
    <div class="form-actions">
      <Button
        @click="handleClick"
      >
        タスク見積登録
      </Button>
    </div>
  </form>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'TaskForm',

  data () {
    return {
      title: '',
      detail: ''
    }
  },

  methods: {
    handleClick () {
      this.$nextTick(() => {
        const newTask = {
          title: this.title,
          detail: this.detail
        }
        axios.post('/tasks', newTask)
          .then(() => {
            alert("タスク見積もりを作成しました")
          })
          .catch(err => {
            this.error = err.message
          })
      })
    }
  }
}
</script>

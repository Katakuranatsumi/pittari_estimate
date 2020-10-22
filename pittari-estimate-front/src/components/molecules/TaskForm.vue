<template>
  <form>
    <h2>タスク見積もり登録フォーム</h2>
    <div class="form-item">
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model="title"
        required
        placeholder="例：ログイン機能の追加">
      <ul class="validation-errors">
        <p v-if="!validation.title.required">タイトルが入力されていません。</p>
      </ul>
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
        :disabled="disableTaskCreateAciton"
        @click="handleClick"
      >
        タスク見積登録
      </Button>
    </div>
  </form>
</template>

<script>
import axios from '@/plugins/axios'
const required = val => !!val.trim()

export default {
  name: 'TaskForm',

  data () {
    return {
      title: '',
      detail: '',
      progress: false
    }
  },

  computed: {
    validation: function () {
      // titleとdetailのバリデーション
      return {
        title: { required: required(this.title) }
      }
    },

    valid: function () {
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true
      for (let i =0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[fields][key])
        if (!valid) { break }
      }
      return valid
    },

    disableTaskCreateAciton: function () {
      // validを使用してログイン処理の可否を判別
      return !this.valid || this.progress
    }
  },

  methods: {
    handleClick: function () {
      this.$nextTick(function () {
        const newTask = {
          title: this.title,
          detail: this.detail
        }
        axios.post('/tasks', newTask)
          .then(() => {
            this.$router.push({ path: '/tasks' })
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

<style>

.validation-errors {
  height: 32px;
  color:orangered;
}
</style>

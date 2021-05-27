<template>
  <form>
    <h2>テスト</h2>
    <h2 class="title block">タスク見積もり編集</h2>
    <div class="form-item  is-centered">
      <label class="label" for="title">タイトル：</label>
      <input
        id="title"
        type="text"
        v-model="title"
        class="input column is-one-third is-offset-one-third">
      <ul class="validation-errors">
        <p v-if="!validation.title.required">タイトルが入力されていません。</p>
      </ul>
    </div>
    <div>
      <label class="label" for="detail">詳細：</label>
      <input
        id="detail"
        type="text"
        v-model="detail"
        class="input column is-one-third is-offset-one-third">
    </div>
    <div class="form-actions mt-5">
      <vue-button
        :disabled="disableTaskUpdateAciton"
        @click="update"
        class="mr-1">
        更新
      </vue-button>
      <router-link
        :to="{ path: '/tasks/' + this.$route.params.taskId }">
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
const required = val => !!val.trim()

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

  computed: {
    validation: function() {
      // titleとdetailのバリデーション
      return {
        title: { required: required(this.title) }
      }
    },

    valid: function() {
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

    disableTaskUpdateAciton: function() {
      // validを使用してログイン処理の可否を判別
      return !this.valid || this.progress
    },
  },

  methods: {
    update: function() {
      this.$swal({
        title: `${this.title}を更新してもよろしいですか？`,
        type: 'confirm',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.value) {
          const updateTask = {
            title: this.title,
            detail: this.detail
          }
          axios.patch('/tasks/' + this.$route.params.taskId, updateTask)
            .then(async() => {
              await this.$swal('タスク見積もりを更新しました')
              this.$router.push({ path: '/' })
            })
            .catch(err => {
              this.error = err.message
            })
        } else {
          this.$swal('タスク見積もりの更新をキャンセルしました')
        }
      })
    },
  },

  mounted() {
    axios.get('/tasks/' + this.$route.params.taskId)
      .then((response) => {
        this.task = response.data["task"]
        this.title = this.task["title"]
        this.detail = this.task["detail"]
      })
      .catch((err) => {
        this.error = err.message
      })
  },
}
</script>

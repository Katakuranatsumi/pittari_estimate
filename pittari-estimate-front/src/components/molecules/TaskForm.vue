<template>
  <form>
    <div class="form-item">
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        required
        placeholder="例：ログイン機能の追加">
    </div>
    <div>
      <label for="detail">詳細</label>
      <input
        id="detail"
        type="text"
        placeholder="例：Railsでログイン機能を実装する"
      >
    </div>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',

  data () {
    return {
      title: '',
      detail: ''
    }
  },
}
</script>

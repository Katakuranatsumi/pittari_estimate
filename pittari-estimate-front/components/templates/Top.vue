<template>
  <div>
  <div>トップページ</div>
  <router-link :to="{ path: '/tasks' }">タスク見積もり一覧</router-link>
  </div>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<template>
  <button
    :class="classes"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'button'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // `type`に応じてクラスを動的に生成する
    classes () {
      const buttonClass = this.type === 'type' ? ('-' + this.type) : ''
      return [`button${buttonClass}`]
    }
  },

  methods: {
    // `click`イベントを発行
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

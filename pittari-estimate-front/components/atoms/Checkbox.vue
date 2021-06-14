<template>
  <input
    :class="classes"
    type="checkbox"
  />
</template>

<script>

export default {
  name: 'VueCheckbox',

  props: {
    type: {
      type: String,
      default: 'checkbox'
    },

    checked: {
      required: false,
      type: Boolean,
      default: null,
    },
  },

  computed: {
    // `type`に応じてクラスを動的に生成する
    classes () {
      const checkBoxClass = this.type === 'type' ? ('-' + this.type) : ''
      return [`checkbox${checkBoxClass}`]
    }
  },
}
</script>

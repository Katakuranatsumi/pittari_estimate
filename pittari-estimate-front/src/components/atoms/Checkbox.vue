<template>
  <input
    :class="classes"
    type="checkbox"
  />
</template>

<script>

export default {
  name: 'Checkbox',

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

    value: {
      required: false,
      type: Boolean,
      default: null,
    },
  },
}
</script>

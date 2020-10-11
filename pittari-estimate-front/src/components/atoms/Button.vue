<template>
  <button
    :class="classes"
    type="button"
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
}
</script>

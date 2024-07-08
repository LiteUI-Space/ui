<script setup lang="ts">
  import type { ButtonProps } from './types'

  import { computed } from 'vue'

  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default'
  })
  const cls = computed(() => {
    return [
      'lt-button',
      'flex-center',
      { 'lt-button--default': props.type === 'default' },
      { 'lt-button--text': props.type === 'text' },
      { 'lt-button--primary': props.type === 'primary' },
      { 'lt-button--link': props.type === 'link' }

    ]
  })
</script>

<template>
  <button
    :class="cls"
  >
    <slot />
  </button>
</template>

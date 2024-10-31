<script setup lang="ts">
  import type { AnchorProps } from './types'

  import { computed, provide } from 'vue'
  import { anchorKey } from './constants'

  defineOptions({
    name: 'LtAnchor'
  })

  defineProps<AnchorProps>()
  const emit = defineEmits<{
    change: [val: string]
  }>()

  const modelValue = defineModel({ default: '' })

  function onChange(val: string) {
    modelValue.value = val
    emit('change', val)
  }

  provide(anchorKey, {
    model: computed(() => modelValue.value),
    onChange
  })
</script>

<template>
  <div class="lt-anchor">
    <slot />
  </div>
</template>

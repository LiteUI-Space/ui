<script setup lang="ts">
  import type { MenuBasicValue, MenuProps } from './types'

  import { provide, toRef } from 'vue'
  import { menuKey } from './constants'

  defineOptions({
    name: 'LtMenu'
  })
  const props = defineProps<MenuProps>()

  const emit = defineEmits<{
    change: [val: MenuBasicValue]
  }>()

  const modelValue = defineModel<MenuBasicValue>({ default: '' })

  function onChange(data: MenuBasicValue) {
    modelValue.value = data
    emit('change', data)
  }

  provide(menuKey, {
    model: toRef(() => modelValue.value),
    open: toRef(() => props.open),
    onChange
  })
</script>

<template>
  <ul class="lt-menu">
    <slot />
  </ul>
</template>

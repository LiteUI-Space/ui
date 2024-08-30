<script setup lang="ts">
  import type { TabPaneProps } from './types'

  import { TabsKey } from './constants'
  import { getCurrentInstance, inject, watch } from 'vue'

  defineOptions({
    name: 'LtTabPane'
  })
  const props = defineProps<TabPaneProps>()

  defineSlots<{
    name: () => any
    default: () => any
  }>()

  const ctx = getCurrentInstance()
  const tabs = inject(TabsKey, undefined)

  watch(() => props, val => {
    console.log('props', val)
    tabs?.update()
  }, {
    immediate: true,
    deep: true
  })
</script>

<template>
  <div v-show="!disabled && tabs?.model.value === ctx?.vnode.key">
    <slot />
  </div>
</template>

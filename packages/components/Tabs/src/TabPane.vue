<script setup lang="ts">
  import type { TabPaneProps } from './types'

  import { TabsKey } from './constants'
  import {
    computed,
    getCurrentInstance,
    inject,
    watch
  } from 'vue'

  defineOptions({
    name: 'LtTabPane'
  })
  const props = defineProps<TabPaneProps>()

  const slot = defineSlots<{
    name: () => any
    default: () => any
  }>()

  const ctx = getCurrentInstance()
  const tabs = inject(TabsKey, undefined)

  watch(() => props, val => {
    tabs?.update({
      ...val,
      slot: slot.name,
      key: ctx?.vnode.key
    })
  }, {
    immediate: true,
    deep: true
  })

  const isActived = computed(() => !props.disabled && tabs?.model.value === ctx?.vnode.key)
  const isLazy = computed(() => props.lazy || tabs?.lazy.value)
</script>

<template>
  <template v-if="isLazy">
    <div v-if="isActived">
      <slot />
    </div>
  </template>
  <template v-else>
    <div v-show="isActived">
      <slot />
    </div>
  </template>
</template>

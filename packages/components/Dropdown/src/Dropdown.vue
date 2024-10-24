<script setup lang="ts">
  import type { DropdownProps } from './types'

  import { inject, ref, watch } from 'vue'
  import { Popover } from '@lite-space/popover'
  import { selectKey } from '@lite-space/select'
  import { Menu, type MenuBasicValue } from '@lite-space/menu'

  defineOptions({
    name: 'LtDropdown'
  })

  const { placement = 'bottom-start', ...restProps } = defineProps<DropdownProps>()

  const emit = defineEmits<{
    change: [val: MenuBasicValue]
  }>()

  const open = defineModel('open', { default: false })
  const select = inject(selectKey, undefined)
  const menuVal = ref(select?.model.value || '')

  if (select?.model) {
    watch(select?.model, val => {
      menuVal.value = val || ''
    })
  }

  function handleMenuChange(val: MenuBasicValue) {
    open.value = false
    emit('change', val)
  }
</script>

<template>
  <Popover
    v-bind="restProps"
    v-model:open="open"
    :content-class="['lt-dropdown', contentClass]"
    :placement="placement"
  >
    <slot />
    <template #content>
      <Menu v-model="menuVal" class="w-full" @change="handleMenuChange">
        <slot name="content" />
      </Menu>
    </template>
  </Popover>
</template>

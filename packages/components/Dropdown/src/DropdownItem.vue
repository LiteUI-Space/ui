<script setup lang="ts">
  import type { DropdownItemProps } from './types'

  import { MenuItem } from '@lite-space/menu'
  import { Divider } from '@lite-space/divider'

  defineOptions({
    name: 'LtDropdownItem'
  })

  const props = defineProps<DropdownItemProps>()
</script>

<template>
  <MenuItem
    v-bind="{ ...props, ...$attrs }"
    popper
    class="lt-dropdown-item"
  >
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <slot />
  </MenuItem>
  <Divider v-if="divider" :margin="4" />
</template>

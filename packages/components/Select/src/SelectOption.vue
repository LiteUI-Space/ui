<script setup lang="ts">
  import type { SelectOptionProps } from './types'

  import { DropdownItem } from '@lite-space/dropdown'

  defineOptions({
    name: 'LtSelectOption'
  })
  const props = defineProps<SelectOptionProps>()
</script>

<template>
  <DropdownItem v-bind="props">
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>

    <slot />
  </DropdownItem>
</template>

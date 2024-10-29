<script setup lang="ts">
  import type { TooltipProps } from './types'

  import { Popover } from '@lite-space/popover'

  defineOptions({
    name: 'LtTooltip'
  })

  const props = defineProps<TooltipProps>()
</script>

<template>
  <Popover v-bind="props" :content-class="['lt-tooltip', contentClass]">
    <slot />
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
  </Popover>
</template>

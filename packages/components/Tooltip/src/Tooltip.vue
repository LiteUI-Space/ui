<script setup lang="ts">
  import type { TooltipProps } from './types'

  import { Popover } from '@lite-space/popover'

  defineOptions({
    name: 'LtTooltip'
  })

  defineProps<TooltipProps>()
</script>

<template>
  <Popover content-class="lt-tooltip">
    <slot />
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
  </Popover>
</template>

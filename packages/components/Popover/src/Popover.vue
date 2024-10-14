<script setup lang="ts">
  import type { PopoverProps } from './types'

  import { Tooltip } from '@lite-space/tooltip'

  defineOptions({
    name: 'LtPopover'
  })

  const { title, offset = 8, ...restProps } = defineProps<PopoverProps>()
</script>

<template>
  <Tooltip v-bind="restProps" :offset="offset">
    <slot />
    <template #content>
      <div class="lt-popover">
        <div v-if="$slots.title || title" class="lt-popover-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div class="lt-popover-content">
          <slot name="content" />
        </div>
      </div>
    </template>
  </Tooltip>
</template>

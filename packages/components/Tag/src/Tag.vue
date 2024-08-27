<script setup lang="ts">
  import type { TagProps } from './types'

  import { computed } from 'vue'
  import { isUnoIcon } from '@lite-ui/utils'

  defineOptions({
    name: 'LtTag'
  })

  const props = withDefaults(defineProps<TagProps>(), {
    bordered: true,
    closeIcon: false
  })
  defineEmits<{
    close: []
  }>()

  const isIcon = computed(() => isUnoIcon(props.icon))
  const isCloseIcon = computed(() => isUnoIcon(typeof props.closeIcon === 'string' ? props.closeIcon : ''))
</script>

<template>
  <span
    class="lt-tag"
    :class="{
      'lt-tag--no-border': !bordered,
    }"
  >
    <span class="inline-flex">
      <span v-if="$slots.icon" class="lt-tag-icon">
        <slot name="icon" />
      </span>
      <span v-else-if="isIcon" class="lt-tag-icon" :class="icon" />
    </span>
    <slot />
    <span class="inline-flex" @click="$emit('close')">
      <span
        v-if="$slots.closeIcon"
        class="lt-tag-icon"
      >
        <slot name="closeIcon" />
      </span>
      <span v-else-if="isCloseIcon" class="lt-tag-icon" :class="[isCloseIcon ? closeIcon : 'i-carbon:close']" />
      <span v-else-if="closeIcon" i-carbon:close class="lt-tag-icon" />
    </span>
  </span>
</template>

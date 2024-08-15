<script setup lang="ts">
  import type { DividerProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtDivider'
  })

  const props = withDefaults(defineProps<DividerProps>(), {
    type: 'horizontal',
    orientation: 'center'
  })

  const cls = computed(() => [
    `lt-divider--${props.type}`,
    props.dashed && `lt-divider--${props.type}-dashed`
  ])
</script>

<template>
  <div
    class="lt-divider"
    :class="cls"
  >
    <div
      v-if="$slots.default && type !== 'vertical'"
      class="lt-divider-text"
      :class="`lt-divider-text--${orientation}`"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { DividerProps } from './types'

  defineOptions({
    name: 'LtDivider'
  })

  const props = withDefaults(defineProps<DividerProps>(), {
    type: 'horizontal',
    orientation: 'center'
  })
</script>

<template>
  <div
    class="lt-divider"
    :class="[
      `lt-divider--${props.type}`,
      props.dashed && `lt-divider--${props.type}-dashed`,
    ]"
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

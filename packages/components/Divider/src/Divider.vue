<script setup lang="ts">
  import type { DividerProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtDivider'
  })

  const { type = 'horizontal', orientation = 'center', margin = '' } = defineProps<DividerProps>()
  const customSizeStyle = computed(() => {
    if (!margin)
      return null

    const size = Number.isNaN(Number(margin)) ? margin : `${margin}px`
    return type === 'horizontal'
      ? { marginBlock: size }
      : { marginInline: size }
  })
</script>

<template>
  <div
    class="lt-divider"
    :class="[
      `lt-divider--${type}`,
      dashed && `lt-divider--${type}-dashed`,
    ]"
    :style="customSizeStyle"
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

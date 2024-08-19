<script setup lang="ts">
  import type { SpaceProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtSpace'
  })

  const props = withDefaults(defineProps<SpaceProps>(), {
    direction: 'horizontal',
    size: 'small',
    align: 'center'
  })

  const customize = computed(() => {
    const cls = {} as Record<'class' | 'style', string>
    if (typeof props.size === 'string') {
      cls.class = `lt-space--${props.size}`
    } else if (typeof props.size === 'number') {
      cls.style = `gap:${props.size}px`
    } else if (Array.isArray(props.size)) {
      const [row, col] = props.size
      cls.style = `gap:${row}px ${col}px`
    } else {
      return cls
    }
    return cls
  })
</script>

<template>
  <div
    class="lt-space"
    :style="[customize.style]"
    :class="[
      `lt-space--${direction}`,
      direction === 'horizontal' && `lt-space--${align}`,
      customize.class,
      {
        'lt-space--wrap': wrap,
      },
    ]"
  >
    <slot />
  </div>
</template>

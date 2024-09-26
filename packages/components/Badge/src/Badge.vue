<script setup lang="ts">
  import type { CSSProperties } from 'vue'
  import type { BadgeProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtBadge'
  })

  const props = withDefaults(defineProps<BadgeProps>(), {
    value: '',
    showZero: false
  })

  const calcValue = computed(() => {
    if (props.max) {
      return Number(props.value) > props.max ? `${props.max}+` : Math.max(0, Number(props.value))
    } else {
      return props.value
    }
  })

  const showZero = computed(() => {
    return props.dot || props.showZero || Number(props.value) > 0
  })

  const offestStyle = computed(() => {
    if (props.offset) {
      const [x, y] = props.offset
      return {
        top: `${y}px`,
        right: `-${x}px`
      } as CSSProperties
    } else {
      return null
    }
  })
</script>

<template>
  <div class="lt-badge">
    <slot />
    <sup
      v-if="showZero || !$slots.default || $slots.value"
      class="lt-badge-inner"
      :class="[
        {
          'lt-badge-inner--basic': $slots.default,
          'lt-badge-dot': dot,
        },
      ]"
      :style="offestStyle"
    >
      <slot v-if="$slots.value && !dot" name="value" />
      <template v-else-if="!dot">{{ calcValue }}</template>
    </sup>
  </div>
</template>

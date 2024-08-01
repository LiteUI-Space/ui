<script setup lang="ts">
  import type { ButtonProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtButton'
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    iconPosition: 'start',
    autoInsertSpace: true
  })

  const slots = defineSlots()

  // add space between two characters in Chinese
  function isTwoCNChar() {
    const defaultSlot = slots.default?.()
    if (
      defaultSlot?.length === 1
      && typeof defaultSlot[0].children === 'string'
    ) {
      const childrenText = defaultSlot[0].children.trim()
      const rexTwocn = /^[\u4E00-\u9FA5]{2}$/
      if (rexTwocn.test(childrenText))
        return true
    }
    return false
  }

  const cls = computed(() => [
    {
      'lt-button--disabled': props.disabled,
      'lt-button--block': props.block,
      'lt-button--icon-end': props.iconPosition === 'end',
      'lt-button--circle': props.circle,
      'lt-button--icon-gap': props.icon || slots.icon,
      'lt-button--two-cn-chars': props.autoInsertSpace && isTwoCNChar()
    },
    props.type ? `lt-button--${props.type}` : '',
    props.danger ? `lt-button--${props.type}-danger` : ''
  ])
</script>

<template>
  <button
    class="lt-button"
    :class="cls"
    :disabled="disabled"
  >
    <slot name="icon">
      <span v-if="icon" class="lt-button--icon" :class="[icon]" />
    </slot>
    <slot />
  </button>
</template>

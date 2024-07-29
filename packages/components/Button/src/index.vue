<script setup lang="ts">
  import type { ButtonProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtButton'
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    iconPosition: 'start'
  })
  console.log('props', props)

  const cls = computed(() => [
    {
      'lt-button--disabled': props.disabled,
      'lt-button--block': props.block,
      'lt-button--icon-end': props.iconPosition === 'end',
      'lt-button--circle': props.circle
    },
    props.type ? `lt-button--${props.type}` : '',
    props.danger ? `lt-button--${props.type}-danger` : ''

  ])

  function handleClick() {
    console.log('click')
  }
</script>

<template>
  <button
    class="lt-button flex-center gap-1.5"
    :class="cls"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <span v-if="props.icon" class="lt-button--icon" :class="[props.icon]" />
    <slot />
  </button>
</template>

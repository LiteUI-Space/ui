<script setup lang="ts">
  import type { TooltipProps } from './types'

  import { onClickOutside, useElementHover } from '@vueuse/core'
  import { computed, ref, toRef, useTemplateRef, watch } from 'vue'
  import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'

  defineOptions({
    name: 'LtTooltip'
  })

  const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
    trigger: 'hover',
    offset: 4,
    hideDelay: 100
  })

  const emit = defineEmits<{
    change: [val: boolean]
  }>()

  const tooltipRef = useTemplateRef('tooltip')
  const contentRef = useTemplateRef('content')
  const propsOffset = toRef(() => props.offset)

  const { floatingStyles } = useFloating(tooltipRef, contentRef, {
    whileElementsMounted: autoUpdate,
    placement: toRef(() => props.placement),
    middleware: computed(() => [offset(propsOffset.value), shift(), flip()])
  })

  const open = defineModel('open', { default: false })
  const isHoverTooltip = props.trigger === 'hover' ? useElementHover(tooltipRef) : ref(false)
  const isHoverTooltipContent = props.trigger === 'hover' ? useElementHover(contentRef) : ref(false)

  let timer: number | undefined
  watch([isHoverTooltip, isHoverTooltipContent], isHovers => {
    if (props.trigger === 'hover') {
      if (isHovers.some(Boolean)) {
        clearTimeout(timer)
        timer = undefined
        open.value = true
      } else {
        timer = setTimeout(() => {
          open.value = false
        }, props.hideDelay)
      }
    }
  })

  function handleClick() {
    if (props.trigger === 'click')
      open.value = !open.value
  }

  if (props.trigger === 'click') {
    onClickOutside(tooltipRef, () => {
      open.value = false
    })
  }

  watch(open, val => {
    emit('change', val)
  })
</script>

<template>
  <div ref="tooltip" class="lt-tooltip" @click="handleClick">
    <slot />
    <div
      v-if="open"
      ref="content"
      class="lt-tooltip-content"
      :style="floatingStyles"
      @click.stop
    >
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

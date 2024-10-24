<script setup lang="ts">
  import type { CSSProperties } from 'vue'
  import type { PopoverProps } from './types'

  import { onClickOutside, useElementHover } from '@vueuse/core'
  import {
    computed,
    ref,
    toRef,
    useTemplateRef,
    watch
  } from 'vue'
  import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'

  defineOptions({
    name: 'LtPopover'
  })

  const props = withDefaults(defineProps<PopoverProps>(), {
    placement: 'top',
    trigger: 'hover',
    offset: 4,
    hideDelay: 100
  })

  const emit = defineEmits<{
    change: [val: boolean]
  }>()

  const isTrigger = (trigger: PopoverProps['trigger']) => props.trigger === trigger

  const popoverRef = useTemplateRef('popover')
  const contentRef = useTemplateRef('content')
  const propsOffset = toRef(() => props.offset)

  const { floatingStyles } = useFloating(popoverRef, contentRef, {
    whileElementsMounted: autoUpdate,
    placement: toRef(() => props.placement),
    middleware: computed(() => [offset(propsOffset.value), shift(), flip()])
  })

  const open = defineModel('open', { default: false })
  const isHoverPopover = isTrigger('hover') ? useElementHover(popoverRef) : ref(false)
  const contextMenuStyle = ref<CSSProperties>()

  let timer: number | undefined
  watch(isHoverPopover, isHovers => {
    if (isTrigger('hover') && !props.disabled) {
      if (isHovers) {
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
    if (isTrigger('contextMenu')) {
      open.value = false
    }

    if (isTrigger('click'))
      open.value = !open.value
  }

  if (isTrigger('click')) {
    onClickOutside(popoverRef, () => {
      open.value = false
    }, { ignore: [contentRef] })
  }

  watch(open, val => {
    emit('change', val)
  })

  function handleRightClick(e: MouseEvent) {
    if (isTrigger('contextMenu')) {
      open.value = true
      contextMenuStyle.value = {
        transform: `translate(${e.offsetX}px, ${e.offsetY}px)`
      }
    }
  }
</script>

<template>
  <div
    ref="popover"
    class="inline-block align-middle"
    @click="handleClick"
    @click.right.prevent="handleRightClick"
  >
    <slot />
    <div
      v-if="open"
      ref="content"
      class="lt-popover-content"
      :class="contentClass"
      :style="[floatingStyles, contextMenuStyle, contentStyle]"
      @click.stop
      @click.right.stop
    >
      <slot name="content" />
    </div>
  </div>
</template>

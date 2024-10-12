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
    offset: 4
  })

  const emit = defineEmits<{
    change: [val: boolean]
  }>()
  const referenceRef = useTemplateRef('reference')
  const floatingRef = useTemplateRef('floating')

  const propsOffset = toRef(() => props.offset)

  const isVisibled = props.trigger === 'hover' ? useElementHover(referenceRef) : ref(false)

  if (props.trigger === 'click') {
    onClickOutside(referenceRef, () => {
      isVisibled.value = false
    })
  }

  const { floatingStyles } = useFloating(referenceRef, floatingRef, {
    whileElementsMounted: autoUpdate,
    placement: toRef(() => props.placement),
    middleware: computed(() => [offset(propsOffset.value), shift(), flip()])
  })

  function handleClick() {
    if (props.trigger === 'click')
      isVisibled.value = !isVisibled.value
  }

  watch(isVisibled, val => {
    emit('change', val)
  })
</script>

<template>
  <div ref="reference" class="lt-tooltip" @click="handleClick">
    <slot />
    <div
      v-if="isVisibled"
      ref="floating"
      class="lt-tooltip-content"
      :style="floatingStyles"
    >
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

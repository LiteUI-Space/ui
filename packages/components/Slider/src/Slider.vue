<script setup lang="ts">
  import type { SliderProps } from './types'

  import { Tooltip } from '@lite-space/tooltip'
  import { computed, useTemplateRef, watch } from 'vue'

  defineOptions({
    name: 'LtSlider'
  })

  const props = withDefaults(defineProps<SliderProps>(), {
    min: 0,
    max: 100,
    step: 1
  })
  const emit = defineEmits<{
    change: [val: number]
  }>()
  const sliderRef = useTemplateRef('slider')
  const modelValue = defineModel({ default: 0 })

  const percentage = computed(() => {
    return Math.round(((modelValue.value - props.min) / (props.max - props.min)) * 100)
  })

  // 根据位置计算值
  function calculateValueFromPosition(position: number) {
    const sliderRect = sliderRef.value!.getBoundingClientRect()
    const percentage = (position - sliderRect.left) / sliderRect.width
    let value = percentage * (props.max - props.min) + props.min

    // 根据步长调整值
    value = Math.round(value / props.step) * props.step

    // 确保值在范围内
    return Math.min(Math.max(value, props.min), props.max)
  }

  function handleTrackClick(e: MouseEvent) {
    const value = calculateValueFromPosition(e.clientX)
    modelValue.value = value
  }

  function handleMouseDown() {
    // 添加全局鼠标事件监听
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  function handleMouseMove(e: MouseEvent) {
    const value = calculateValueFromPosition(e.clientX)
    modelValue.value = value
  }

  function handleMouseUp() {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  watch(percentage, val => {
    const value = Math.round((val / 100) * (props.max - props.min) + props.min)
    modelValue.value = value
    emit('change', value)
  })
</script>

<template>
  <div ref="slider" class="lt-slider">
    <div class="lt-slider-track" @click="handleTrackClick">
      <div class="lt-slider-track--active" :style="{ width: `${percentage}%` }" />
    </div>
    <Tooltip
      class="lt-slider-handle"
      :style="{ left: `${percentage}%` }"
      :content="String(modelValue)"
      @mousedown="handleMouseDown"
    >
      <div class="lt-slider-handle-inner" />
    </Tooltip>
  </div>
</template>

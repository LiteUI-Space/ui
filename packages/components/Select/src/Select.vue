<script setup lang="ts">
  import type { SelectProps } from './types'
  import type { MenuBasicValue } from '@lite-space/menu'

  import { Divider } from '@lite-space/divider'
  import { isUnoIcon } from '@lite-space/utils'
  import { useElementHover } from '@vueuse/core'
  import { Dropdown } from '@lite-space/dropdown'
  import {
    computed,
    provide,
    useTemplateRef,
    watch
  } from 'vue'

  import { selectKey } from './constants'

  defineOptions({
    name: 'LtSelect'
  })

  const props = defineProps<SelectProps>()
  const emit = defineEmits<{
    change: [val: MenuBasicValue]
  }>()
  const open = defineModel('open', { default: false })
  const modelValue = defineModel<MenuBasicValue>({ default: '' })
  const isSuffixIcon = computed(() => isUnoIcon(props.suffix))

  const selectRef = useTemplateRef('select')
  const contentStyle = computed(() => open.value ? { minWidth: `${selectRef.value?.clientWidth}px` } : null)

  const isHoverSelect = useElementHover(selectRef)

  function handleChange(val: MenuBasicValue) {
    modelValue.value = val
  }

  function handleClearable() {
    modelValue.value = ''
    open.value = false
  }

  watch(modelValue, val => {
    emit('change', val)
  })

  provide(selectKey, {
    model: computed(() => modelValue.value)
  })
</script>

<template>
  <Dropdown
    v-model:open="open"
    trigger="click"
    content-class="lt-select"
    :content-style="contentStyle"
    @change="handleChange"
  >
    <div ref="select" class="lt-select-inner">
      <div class="flex-1 relative">
        <!-- <input class="h-full text-sm border-none outline-none absolute w-full op-0 cursor-pointer" :placeholder="placeholder"> -->
        <span>{{ modelValue }}</span>
      </div>
      <div class="flex items-center">
        <slot v-if="clearable && modelValue && isHoverSelect" name="clearable">
          <span i-heroicons:x-circle-16-solid class="lt-select-suffix-clearable" @click.stop="handleClearable" />
        </slot>
        <slot v-else name="suffix">
          <span v-if="isSuffixIcon" class="lt-select-suffix-icon" :class="suffix" />
          <span v-else i-heroicons:chevron-down-solid class="lt-select-suffix" />
        </slot>
      </div>
    </div>

    <template #content>
      <template v-if="$slots.header">
        <slot name="header" />
        <Divider :margin="2" />
      </template>
      <slot />
      <template v-if="$slots.footer">
        <Divider :margin="2" />
        <slot name="footer" />
      </template>
    </template>
  </Dropdown>
</template>

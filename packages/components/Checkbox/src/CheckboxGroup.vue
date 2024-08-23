<script setup lang="ts">
  import type { CheckboxBasicValue, CheckboxGroupChangeEvent, CheckboxGroupProps } from './types'

  import { isObject } from '@lite-ui/utils'
  import { computed, nextTick, provide } from 'vue'

  import Checkbox from './Checkbox.vue'
  import { CheckboxGroupKey } from './constants'

  defineOptions({
    name: 'LtCheckboxGroup'
  })

  const props = defineProps<CheckboxGroupProps>()
  const emit = defineEmits<{
    change: [val: CheckboxGroupChangeEvent]
  }>()

  const modelValue = defineModel<CheckboxGroupChangeEvent>({ default: [] })

  const options = computed(() => props.options?.map(item => {
    if (isObject(item))
      return item
    return { label: item, value: item }
  }))

  function handleChange(value: CheckboxBasicValue, val: boolean) {
    if (val) {
      modelValue.value = [...new Set([...modelValue.value, value])]
    } else {
      const idx = modelValue.value.indexOf(value)
      modelValue.value.splice(idx, 1)
    }
    nextTick(() => {
      emit('change', modelValue.value.sort())
    })
  }

  provide(CheckboxGroupKey, {
    onChange: handleChange,
    model: computed(() => modelValue.value)
  })
</script>

<template>
  <span class="lt-checkbox-group">
    <slot>
      <Checkbox
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :model-value="modelValue.includes(item.value)"
        :disabled="disabled || item.disabled"
        :readonly="item.readonly"
      >
        {{ item.label }}
      </Checkbox>
    </slot>
  </span>
</template>

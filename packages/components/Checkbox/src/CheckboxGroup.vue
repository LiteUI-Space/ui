<script setup lang="ts">
  import type { CheckboxGroupOptions, CheckboxGroupProps } from './types'

  import { computed } from 'vue'
  import { isObject } from '@lite-ui/utils'

  import Checkbox from './Checkbox.vue'

  defineOptions({
    name: 'LtCheckboxGroup'
  })

  const props = defineProps<CheckboxGroupProps>()
  const emit = defineEmits<{
    change: [val: (string | number)[]]
  }>()

  const modelValue = defineModel<(string | number)[]>({ default: [] })

  const options = computed(() => props.options.map(item => {
    if (isObject(item))
      return item
    return { label: item, value: item }
  }))

  function handleChange(item: CheckboxGroupOptions, val: boolean) {
    if (val) {
      if (modelValue.value.includes(item.value))
        return
      modelValue.value.push(item.value)
    } else {
      const idx = modelValue.value.indexOf(item.value)
      modelValue.value.splice(idx, 1)
    }
    emit('change', modelValue.value.sort())
  }
</script>

<template>
  <span class="lt-checkbox-group">
    <Checkbox
      v-for="item in options"
      :key="item.value"
      :model-value="modelValue.includes(item.value)"
      :disabled="disabled || item.disabled"
      :readonly="item.readonly"
      @change="val => handleChange(item, val)"
    >
      {{ item.label }}
    </Checkbox>
  </span>
</template>

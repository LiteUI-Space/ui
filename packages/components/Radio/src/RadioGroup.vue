<script setup lang="ts">
  import type { RadioBasicValue, RadioGroupChangeEvent, RadioGroupProps } from './types'

  import { computed, provide } from 'vue'
  import { isObject } from '@lite-ui/utils'

  import Radio from './Radio.vue'
  import { radioGroupKey } from './constants'

  defineOptions({
    name: 'LtRadioGroup'
  })

  const props = defineProps<RadioGroupProps>()
  const emit = defineEmits<{
    change: [val: RadioGroupChangeEvent]
  }>()

  const modelValue = defineModel<RadioBasicValue>({ default: '' })

  const options = computed(() => props.options?.map(item => {
    if (isObject(item))
      return item
    return { label: item, value: item }
  }))

  function handleChange(value: RadioBasicValue) {
    modelValue.value = value
    emit('change', value)
  }

  provide(radioGroupKey, {
    onChange: handleChange,
    model: computed(() => modelValue.value)
  })
</script>

<template>
  <span class="lt-radio-group">
    <slot>
      <Radio
        v-for="item in options"
        :key="item.value"
        :model-value="item.value === modelValue"
        :value="item.value"
        :disabled="disabled || item.disabled"
      >
        {{ item.label }}
      </Radio>
    </slot>
  </span>
</template>

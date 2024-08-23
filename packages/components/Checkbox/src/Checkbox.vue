<script setup lang="ts">
  import type { CheckboxProps } from './types'

  import { computed, inject } from 'vue'
  import { CheckboxGroupKey } from './constants'

  defineOptions({
    name: 'LtCheckbox'
  })

  const props = defineProps<CheckboxProps>()
  const emit = defineEmits<{
    change: [value: boolean]
  }>()

  const CheckboxGroup = inject(CheckboxGroupKey, undefined)
  const modelValue = defineModel<boolean>({ default: false })
  const isChecked = computed(() => CheckboxGroup ? CheckboxGroup.model.value.includes(props.value ?? '') : modelValue.value)

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    modelValue.value = target.checked
    emit('change', target.checked)

    if (CheckboxGroup)
      CheckboxGroup.onChange(props.value ?? '', target.checked)
  }
</script>

<template>
  <label
    class="lt-checkbox"
    :class="{
      'lt-checkbox--disabled': disabled,
      'cursor-pointer': !readonly,
    }"
  >
    <span
      class="lt-checkbox-inner"
      :class="{
        'lt-checkbox-inner--checked': indeterminate || isChecked,
        'lt-checkbox-inner--disabled': disabled,
      }"
    >
      <input
        v-bind="$attrs"
        :value="value"
        type="checkbox"
        :disabled="readonly || disabled"
        :checked="isChecked"
        hidden
        @change="handleChange"
      >
      <span
        v-if="indeterminate"
        class="lt-checkbox-indeterminate"
        :class="{
          'lt-checkbox-indeterminate--disabled': disabled,
        }"
      />
      <span
        v-else-if="isChecked"
        i-carbon:checkmark
        class="lt-checkbox-iconchecked"
        :class="{
          'lt-checkbox-iconchecked--disabled': disabled,
        }"
      />
    </span>
    <span
      v-if="$slots.default"
      class="lt-checkbox-label"
      :class="{
        'lt-checkbox-label--disabled': disabled,
      }"
    >
      <slot />
    </span>
  </label>
</template>

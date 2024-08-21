<script setup lang="ts">
  import type { CheckboxProps } from './types'

  defineOptions({
    name: 'LtCheckbox'
  })

  defineProps<CheckboxProps>()
  const emit = defineEmits<{
    change: [value: boolean]
  }>()

  const modelValue = defineModel<boolean>({ default: false })

  function handleChange() {
    emit('change', modelValue.value)
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
        'lt-checkbox-inner--checked': indeterminate || modelValue,
        'lt-checkbox-inner--disabled': disabled,
      }"
    >
      <input
        v-model="modelValue"
        type="checkbox"
        :disabled="readonly || disabled"
        :checked="modelValue"
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
        v-else-if="modelValue"
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

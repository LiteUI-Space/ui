<script setup lang="ts">
  import type { CheckboxProps } from './types'

  import { watch } from 'vue'

  defineOptions({
    name: 'LtCheckbox'
  })

  const props = withDefaults(defineProps<CheckboxProps>(), {
    checked: false,
    indeterminate: false
  })
  const emit = defineEmits<{
    change: [value: boolean]
  }>()

  const modelValue = defineModel<boolean>({ default: false })

  watch(() => props.checked, val => {
    modelValue.value = val
  }, {
    immediate: true
  })

  function handleChange() {
    emit('change', modelValue.value)
  }
</script>

<template>
  <label
    class="lt-checkbox"
    :class="{
      'lt-checkbox--disabled': disabled,
    }"
  >
    <span
      class="lt-checkbox-inner"
      :class="{
        'lt-checkbox-inner--checked': modelValue || indeterminate,
        'lt-checkbox-inner--disabled': disabled,
      }"
    >
      <input
        v-model="modelValue"
        type="checkbox"
        :disabled="disabled"
        :checked="modelValue"
        hidden
        @change="handleChange"
        @click.stop
      >
      <span
        v-if="indeterminate"
        class="lt-checkbox-indeterminate"
        :class="{
          'lt-checkbox-indeterminate--disabled': disabled,
        }"
      />
      <span
        v-else-if="modelValue || checked"
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

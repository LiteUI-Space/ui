<script setup lang="ts">
  import type { RadioChangeEvent, RadioProps } from './types'

  import { computed, inject } from 'vue'
  import { radioGroupKey } from './constants'

  defineOptions({
    name: 'LtRadio'
  })

  const props = defineProps<RadioProps>()
  const emit = defineEmits<{
    change: [value: RadioChangeEvent]
  }>()

  const radioGroup = inject(radioGroupKey, undefined)
  const modelValue = defineModel<boolean>({ default: false })

  const isChecked = computed(() => radioGroup ? radioGroup.model.value === props.value : modelValue.value)

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    modelValue.value = target.checked

    if (radioGroup) {
      emit('change', props.value!)
      radioGroup.onChange(props.value!)
    } else {
      emit('change', target.checked)
    }
  }
</script>

<template>
  <label
    class="lt-radio"
    :class="{
      'lt-radio--disabled': disabled,
    }"
  >
    <span
      class="lt-radio-inner"
      :class="{
        'lt-radio-inner--disabled': disabled,
      }"
    >
      <input
        v-bind="$attrs"
        :value="value"
        type="radio"
        :disabled="disabled"
        :checked="isChecked"
        hidden
        @change="handleChange"
      >
      <span
        v-if="isChecked"
        class="lt-radio-icon"
        :class="{
          'lt-radio-icon--disabled': disabled,
        }"
      />
    </span>
    <span
      v-if="$slots.default"
      class="lt-radio-label"
      :class="{
        'lt-radio-label--disabled': disabled,
      }"
    >
      <slot />
    </span>
  </label>
</template>

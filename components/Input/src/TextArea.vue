<script setup lang="ts">
  import type { TextAreaProps } from './types'

  defineOptions({
    name: 'LtTextArea'
  })

  defineProps<TextAreaProps>()
</script>

<template>
  <div class="lt-textarea">
    <div
      class="lt-textarea-wrapper "
      :class="[
        disabled ? 'lt-lt-textarea--disabled' : 'lt-textarea--hover',
      ]"
    >
      <textarea
        v-bind="$attrs"
        class="lt-textarea-inner leading-5"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          { 'lt-textarea--resize': resize,
            'lt-textarea--disabled': disabled,
          },
        ]"
      />
    </div>
    <span class="lt-input--clearable" />
  </div>
</template>

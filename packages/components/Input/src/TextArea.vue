<script setup lang="ts">
  import type { TextAreaProps } from './types'

  import { ref } from 'vue'

  defineOptions({
    name: 'LtTextArea'
  })
  withDefaults(defineProps<TextAreaProps>(), {
    resize: true,
    placeholder: '',
    size: 'default'
  })
  const emit = defineEmits<{
    clear: []
    focus: []
    blur: []
  }>()

  const modelValue = defineModel({ default: '' })

  // TODO: 清除后保留选中的样式并聚焦
  function handleClearable() {
    modelValue.value = ''
    emit('clear')
  }
  const textAreaRef = ref<HTMLTextAreaElement | null>()

  function focus() {
    textAreaRef.value?.focus()
  }

  function blur() {
    textAreaRef.value?.blur()
  }

  function clear() {
    handleClearable()
  }

  defineExpose({ focus, blur, clear })
</script>

<template>
  <div
    class="lt-textarea"
    :class="[
      `lt-textarea-${size}`,
      disabled ? 'lt-textarea--disabled' : 'lt-textarea--hover',
    ]"
  >
    <textarea
      v-bind="$attrs"
      v-model="modelValue"
      class="lt-textarea-inner"
      :class="[
        {
          'lt-textarea--resize-none': !resize,
          'lt-textarea--disabled': disabled,
          'lt-input-small--inner': size === 'small',
        },
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <span v-if="modelValue" class="lt-textarea--clearable" @click="handleClearable" />
  </div>
</template>

<script setup lang="ts">
  import type { InputProps } from './types'

  import { computed, ref } from 'vue'
  import { isUnoIcon } from '@lite-ui/utils'

  defineOptions({
    name: 'LtInput'
  })

  const props = withDefaults(defineProps<InputProps>(), {
    size: 'default'
  })
  const emit = defineEmits<{
    clear: []
    focus: []
    blur: []
  }>()

  const slots = defineSlots()
  const inputRef = ref<HTMLInputElement | null>()

  const isPrefixIcon = computed(() => isUnoIcon(props.prefix))
  const isSuffixIcon = computed(() => isUnoIcon(props.suffix))
  const isAddonBefore = computed(() => !!props.addonBefore || !!slots.addonBefore)
  const isAddonAfter = computed(() => !!props.addonAfter || !!slots.addonAfter)

  const clsWrapper = computed(() => [
    {
      'lt-input-wrapper--addonBefore': isAddonBefore.value,
      'lt-input-wrapper--addonAfter': isAddonAfter.value
    },
    props.disabled ? 'lt-input--disabled' : 'lt-input--hover'
  ])

  const modelValue = defineModel({ default: '' })

  // TODO: 清除后保留选中的样式并聚焦
  function handleClearable() {
    modelValue.value = ''
    emit('clear')
  }

  function focus() {
    inputRef.value?.focus()
  }

  function blur() {
    inputRef.value?.blur()
  }

  function clear() {
    handleClearable()
  }

  defineExpose({ focus, blur, clear })
</script>

<template>
  <div class="lt-input" :class="`lt-input-${size}`">
    <span
      v-if="isAddonBefore"
      class="lt-input--addonBefore"
      :class="{
        'lt-input--disabled': disabled,
      }"
    >
      <span class="lt-input--addon-text" :class="`lt-input-${size}--addon-text`">
        <slot name="addonBefore">
          {{ addonBefore }}
        </slot>
      </span>
    </span>

    <div
      class="lt-input-wrapper"
      :class="clsWrapper"
    >
      <span v-if="$slots.prefix" class="lt-input--prefix-suffix">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <span v-else-if="isPrefixIcon" class="lt-input--prefix-suffix-icon" :class="prefix" />
      <span v-else-if="prefix" class="lt-input--prefix-suffix">{{ prefix }}</span>

      <input
        v-bind="$attrs"
        ref="inputRef"
        v-model.trim="modelValue"
        class="lt-input-inner"
        :class="{
          'lt-input--disabled': disabled,
          'lt-input--password': password,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="password ? 'password' : 'text'"
      >

      <span v-if="$slots.suffix" class="lt-input--prefix-suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </span>
      <span v-else-if="clearable && modelValue" class="lt-input--clearable" @click="handleClearable" />
      <span v-else-if="isSuffixIcon" class="lt-input--prefix-suffix-icon" :class="suffix" />
      <span v-else-if="suffix" class="lt-input--prefix-suffix">{{ suffix }}</span>
    </div>

    <span
      v-if="isAddonAfter"
      class="lt-input--addonAfter"
      :class="{
        'lt-input--disabled': disabled,
      }"
    >
      <span class="lt-input--addon-text" :class="`lt-input-${size}--addon-text`">
        <slot name="addonAfter">
          {{ addonAfter }}
        </slot>
      </span>
    </span>
  </div>
</template>

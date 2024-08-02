<script setup lang="ts">
  import type { InputProps } from './types'

  import { computed } from 'vue'

  defineOptions({
    name: 'LtInput'
  })

  const props = defineProps<InputProps>()
  const slots = defineSlots()

  const ICON_PREFIX = 'i-'

  const isPrefixIcon = computed(() => !!props.prefix?.startsWith(ICON_PREFIX))
  const isSuffixIcon = computed(() => !!props.suffix?.startsWith(ICON_PREFIX))
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
</script>

<template>
  <div class="lt-input ">
    <span
      v-if="isAddonBefore"
      class="lt-input--addonBefore"
      :class="{
        'lt-input--disabled': disabled,
      }"
    >
      <span class="lt-input--addon-text">
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
      <span v-else-if="isPrefixIcon" :class="prefix" class="lt-input--prefix-suffix-icon" />
      <span v-else-if="prefix" class="lt-input--prefix-suffix">{{ prefix }}</span>

      <input
        v-model="modelValue"
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
      <span v-else-if="isSuffixIcon" :class="suffix" class="lt-input--prefix-suffix-icon" />
      <span v-else-if="suffix" class="lt-input--prefix-suffix">{{ suffix }}</span>
    </div>

    <span
      v-if="isAddonAfter"
      class="lt-input--addonAfter"
      :class="{
        'lt-input--disabled': disabled,
      }"
    >
      <span class="lt-input--addon-text">
        <slot name="addonAfter">
          {{ addonAfter }}
        </slot>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
  import type { SwitchProps } from './types'

  import { computed, useSlots } from 'vue'
  import { isUnoIcon } from '@lite-space/utils'

  defineOptions({
    name: 'LtSwitch'
  })
  const props = defineProps<SwitchProps>()

  const emit = defineEmits<{
    change: [val: boolean]
  }>()
  const slots = useSlots()

  const modelValue = defineModel({ default: false })

  const isCheckedChildrenIcon = computed(() => isUnoIcon(props?.checkedChildren))
  const isUnCheckedChildrenIcon = computed(() => isUnoIcon(props?.unCheckedChildren))
  const isDisplayCheckedChildren = computed(() => slots.checkedChildren || props.checkedChildren || isCheckedChildrenIcon.value)
  const isDisplayUnCheckedChildren = computed(() => slots.unCheckedChildren || props.unCheckedChildren || isUnCheckedChildrenIcon.value)

  function change() {
    if (props.disabled)
      return
    modelValue.value = !modelValue.value
    emit('change', !modelValue.value)
  }
</script>

<template>
  <div
    class="lt-switch"
    :class="{
      'lt-switch--checked': modelValue,
      'lt-switch--disabled': disabled,
    }"
    @click="change"
  >
    <div
      class="lt-switch-handle"
      :class="{ 'lt-switch-handle--checked': modelValue }"
    />

    <div
      v-if="isDisplayCheckedChildren || isDisplayUnCheckedChildren"
      class="lt-switch-inner"
      :class="{
        'lt-switch-inner--checked': modelValue,
      }"
    >
      <div
        v-if="isDisplayCheckedChildren"
        class="lt-switch-inner-checked"
        :class="{ 'lt-switch-inner-checked--checked': !modelValue }"
      >
        <span v-if="isCheckedChildrenIcon" class="lt-switch-inner-icon" :class="checkedChildren" />
        <span v-else class="lt-switch-inner-content">
          <slot name="checkedChildren"> {{ checkedChildren }} </slot>
        </span>
      </div>

      <div
        v-if="isDisplayUnCheckedChildren"
        class="lt-switch-inner-unchecked"
        :class="{
          'lt-switch-inner-unchecked--checked': modelValue,
          'lt-switch-inner-unchecked-icon': isUnCheckedChildrenIcon,
        }"
      >
        <span v-if="isUnCheckedChildrenIcon" class="lt-switch-inner-icon" :class="unCheckedChildren" />
        <span v-else class="lt-switch-inner-content">
          <slot name="unCheckedChildren"> {{ unCheckedChildren }} </slot>
        </span>
      </div>
    </div>
  </div>
</template>

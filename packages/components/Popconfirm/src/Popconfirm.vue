<script setup lang="ts">
  import type { PopconfirmProps } from './types'

  import { Button } from '@lite-space/button'
  import { Tooltip } from '@lite-space/tooltip'

  defineOptions({
    name: 'LtPopconfirm'
  })

  withDefaults(defineProps<PopconfirmProps>(), {
    showCancel: true
  })

  defineEmits<{
    confirm: []
    cancel: []
  }>()
  defineSlots<{
    default: () => any
    icon: () => any
    title: () => any
    description: () => any
  }>()
</script>

<template>
  <Tooltip trigger="click" :placement="$props.placement" :offset="8">
    <slot />
    <template #content>
      <div class="lt-popconfirm">
        <div class="lt-popconfirm-message">
          <div class="lt-popconfirm-message-icon">
            <slot name="icon">
              <span
                class="lt-popconfirm-message-icon-inner"
                :class="[icon ? icon : 'i-heroicons:exclamation-circle-16-solid text-amber-400']"
              />
            </slot>
          </div>
          <div class="lt-popconfirm-message-text">
            <div class="lt-popconfirm-message-text-title">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
            <div v-if="$slots.description || description" class="mt-1">
              <slot name="description">
                {{ description }}
              </slot>
            </div>
          </div>
        </div>
        <div class=" lt-popconfirm-buttons">
          <Button v-if="showCancel" size="small" @click="$emit('cancel')">
            {{ cancelText }}
          </Button>
          <Button size="small" type="primary" @click="$emit('confirm')">
            {{ okText }}
          </Button>
        </div>
      </div>
    </template>
  </Tooltip>
</template>

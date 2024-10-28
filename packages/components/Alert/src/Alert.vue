<script setup lang="ts">
  import type { AlertProps } from './types'

  import { computed, ref } from 'vue'
  import { Card } from '@lite-space/card'
  import { isUnoIcon } from '@lite-space/utils'

  defineOptions({
    name: 'LtAlert'
  })

  const props = defineProps<AlertProps>()
  const emit = defineEmits<{
    change: []
  }>()

  const open = ref(true)
  const isIcon = computed(() => isUnoIcon(props.icon))
  const notDescriptionClass = computed(() => ({
    'items-center': !props.description
  }))

  function close() {
    open.value = false
    emit('change')
  }
</script>

<template>
  <Card v-if="open">
    <div
      class="lt-alert"
      :class="notDescriptionClass"
    >
      <div
        class="lt-alert-inner"
        :class="notDescriptionClass"
      >
        <div
          v-if="isIcon || $slots.icon"
          class="lt-alert-icon"
        >
          <slot name="icon">
            <span class="lt-alert-icon" :class="icon" />
          </slot>
        </div>
        <div>
          <div v-if="message || $slots.message" class="lt-alert-message">
            <slot name="message">
              {{ message }}
            </slot>
          </div>
          <div v-if="description || $slots.description" class="lt-alert-description">
            <slot name="description">
              {{ description }}
            </slot>
          </div>
        </div>
      </div>
      <div class="flex-center">
        <div v-if="$slots.action">
          <slot name="action" />
        </div>
        <span
          v-if="closable"
          i-heroicons:x-mark-16-solid
          class="lt-alert-closeIcon"
          @click="close"
        />
      </div>
    </div>
  </Card>
</template>

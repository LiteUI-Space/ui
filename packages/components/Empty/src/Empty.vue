<script setup lang="ts">
  import type { EmptyProps } from './types'

  import { IconEmpty } from '@lite-space/icon'

  defineOptions({
    name: 'LtEmpty'
  })

  defineProps<EmptyProps>()
</script>

<template>
  <div class="lt-empty">
    <div class="lt-empty-image">
      <img
        v-if="image"
        class="w-full h-full"
        :class="imageClass"
        :src="image"
      >
      <IconEmpty v-else class="text-gray-200 w-full h-full" />
    </div>
    <div v-if="$slots.description || description" class="lt-empty-description">
      <slot v-if="$slots.description" name="description" />
      <template v-else>
        {{ description }}
      </template>
    </div>
    <slot />
  </div>
</template>

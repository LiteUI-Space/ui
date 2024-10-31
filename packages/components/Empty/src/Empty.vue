<script setup lang="ts">
  import type { EmptyProps } from './types'

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
      <span v-else i-heroicons:archive-box-x-mark-solid class="inline-block text-gray-200 w-full h-full" />
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

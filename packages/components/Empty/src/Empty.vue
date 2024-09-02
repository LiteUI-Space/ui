<script setup lang="ts">
  import type { EmptyProps } from './types'

  import EmptyIcon from './EmptyIcon.vue'

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
      <EmptyIcon v-else />
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

<script setup lang="ts">
  withDefaults(defineProps<{
    title: string
    cls?: string
    col?: boolean
  }>(), {
    col: false
  })
</script>

<template>
  <div>
    <h1 ml-60>
      {{ title }}
    </h1>
    <div
      :class="[cls, {
        'flex-col': col,
      }]"
      flex="~ gap-2 justify-center"
    >
      <slot />
    </div>
  </div>
</template>

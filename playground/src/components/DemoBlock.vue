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
    <h1 ml-10>
      {{ title }}
    </h1>
    <div :class="cls">
      <slot />
    </div>
  </div>
</template>

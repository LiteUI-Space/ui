<script setup lang="ts">
  defineProps<{
    title: string
    cls?: string
  }>()
</script>

<template>
  <div>
    <h1 ml-60>
      {{ title }}
    </h1>
    <div :class="cls" flex="~ gap-2 justify-center">
      <slot />
    </div>
  </div>
</template>

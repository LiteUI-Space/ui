<script setup lang="ts">
  const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
  <ul v-if="modelValue" class="p-0 w-full">
    <slot />
  </ul>
</template>

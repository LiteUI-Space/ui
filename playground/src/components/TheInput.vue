<script setup lang="ts">
  const modelValue = defineModel()
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    class="px-4 py-1.5 w-250px text-center bg-transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  >
</template>

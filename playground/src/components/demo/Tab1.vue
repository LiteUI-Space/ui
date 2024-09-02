<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    console.log('tab1 mounted')
  })
  onUnmounted(() => {
    console.log('tab1 onUnmounted')
  })
</script>

<template>
  <span>tab11</span>
</template>

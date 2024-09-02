<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    console.log('tab2 mounted')
  })
  onUnmounted(() => {
    console.log('tab2 onUnmounted')
  })
</script>

<template>
  <span>tab22</span>
</template>

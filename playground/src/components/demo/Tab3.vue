<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    console.log('tab3 mounted')
  })
  onUnmounted(() => {
    console.log('tab3 onUnmounted')
  })
</script>

<template>
  <span>tab33</span>
</template>

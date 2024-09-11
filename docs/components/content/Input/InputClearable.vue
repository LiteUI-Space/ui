<script setup lang="ts">
  import { Input } from '@lite-space/ui'

  function handleClear() {
    console.log('clear')
  }
</script>

<template>
  <Input
    clearable
    placeholder="clearable"
    @clear="handleClear"
  />
</template>

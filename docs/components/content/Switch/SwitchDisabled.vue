<script setup lang="ts">
  import { Switch } from '@lite-space/ui'

  const checked = ref(true)
</script>

<template>
  <Switch v-model="checked" disabled />
</template>

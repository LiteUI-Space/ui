<script setup lang="ts">
  import { Slider } from '@lite-space/ui'

  const slederValue = ref(30)
</script>

<template>
  <Slider v-model="slederValue" />
</template>

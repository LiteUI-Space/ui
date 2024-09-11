<script setup lang="ts">
  import { Radio } from '@lite-space/ui'
  import type { RadioChangeEvent } from '@lite-space/ui'

  function handleChange(val: RadioChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <Radio @change="handleChange">
    Radio
  </Radio>
  <Radio :model-value="true">
    Radio checked
  </Radio>
</template>

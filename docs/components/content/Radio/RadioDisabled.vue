<script setup lang="ts">
  import { Radio } from '@lite-space/ui'
</script>

<template>
  <Radio disabled>
    Radio
  </Radio>
  <Radio disabled :model-value="true">
    Radio checked
  </Radio>
</template>

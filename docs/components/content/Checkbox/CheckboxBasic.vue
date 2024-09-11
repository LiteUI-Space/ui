<script setup lang="ts">
  import { Checkbox } from '@lite-space/ui'

  const checkedVal = ref(false)
</script>

<template>
  <Checkbox v-model="checkedVal">
    Checkbox
  </Checkbox>
  <Checkbox :model-value="true">
    Checkbox checked
  </Checkbox>
  <Checkbox :model-value="true" readonly>
    Checkbox checked readonly
  </Checkbox>
</template>

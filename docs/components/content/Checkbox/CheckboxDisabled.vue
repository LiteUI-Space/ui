<script setup lang="ts">
  import { Checkbox } from '@lite-space/ui'

  const checkedVal = ref(false)
</script>

<template>
  <Checkbox v-model="checkedVal" disabled>
    Checkbox
  </Checkbox>
  <Checkbox indeterminate disabled>
    Checkbox indeterminate
  </Checkbox>
  <Checkbox :model-value="true" disabled>
    Checkbox checked
  </Checkbox>
</template>

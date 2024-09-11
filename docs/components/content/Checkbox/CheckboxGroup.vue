<script setup lang="ts">
  import { Checkbox, CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent } from '@lite-space/ui'

  const checkedVal = ref(['Apple'])
  function handleChange(val: boolean | CheckboxGroupChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <CheckboxGroup v-model="checkedVal" @change="handleChange">
    <Checkbox value="Apple">
      Apple
    </Checkbox>
    <Checkbox :value="0">
      Pear
    </Checkbox>
    <Checkbox value="or">
      Orange
    </Checkbox>
  </CheckboxGroup>
</template>

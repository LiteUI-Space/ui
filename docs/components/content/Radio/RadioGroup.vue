<script setup lang="ts">
  import { Radio, RadioGroup } from '@lite-space/ui'
  import type { RadioChangeEvent } from '@lite-space/ui'

  const modelValue = ref('0')
  function handleChange(value: RadioChangeEvent) {
    console.log('value ', value)
  }
</script>

<template>
  <RadioGroup v-model="modelValue" @change="handleChange">
    <Radio value="0">
      Apple
    </Radio>
    <Radio value="Pear">
      Pear
    </Radio>
    <Radio :value="2">
      orange
    </Radio>
  </RadioGroup>
</template>

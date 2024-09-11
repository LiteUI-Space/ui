<script setup lang="ts">
  import { RadioGroup } from '@lite-space/ui'
  import type { RadioChangeEvent, RadioGroupProps } from '@lite-space/ui'

  const options = ['Apple', 'Pear', 'Orange']
  const options1: RadioGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2: RadioGroupProps['options'] = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]

  const checkval = ref('Apple')
  const checkval1 = ref('0')
  const checkval2 = ref('Apple')

  function handleChange(value: RadioChangeEvent) {
    console.log('value ', value)
  }
</script>

<template>
  <RadioGroup v-model="checkval" :options="options" @change="handleChange" />
  <br>
  <RadioGroup v-model="checkval1" :options="options1" @change="handleChange" />
  <br>
  <RadioGroup v-model="checkval2" :options="options2" @change="handleChange" />
</template>

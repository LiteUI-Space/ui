<script setup lang="ts">
  import { CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent, CheckboxGroupProps } from '@lite-space/ui'

  const checkval = ref(['Apple'])
  const checkval1 = ref(['0', 'Orange'])
  const checkval2 = ref(['Apple'])

  const options = ['Apple', 'Pear', 'Orange']
  const options1: CheckboxGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2: CheckboxGroupProps['options'] = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear', readonly: true }, { label: 'Orange', value: 'Orange' }]

  function handleChange(val: boolean | CheckboxGroupChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <CheckboxGroup v-model="checkval" :options="options" />
  <br>
  <CheckboxGroup v-model="checkval1" :options="options1" @change="handleChange" />
  <br>
  <CheckboxGroup v-model="checkval2" :options="options2" />
</template>

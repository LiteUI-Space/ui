<script setup lang="ts">
  import { Checkbox, CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent } from '@lite-space/ui'

  const options = ['Apple', 'Pear', 'Orange']
  const checkedVal = ref(['Apple'])
  const checkall = ref(false)

  const indeterminate = ref(true)
  function handleCheckAllChange(val: boolean) {
    console.log('val', val)
    checkedVal.value = val ? [...options] : []
    indeterminate.value = false
  }
  function handleCheckedGroupChange(val: CheckboxGroupChangeEvent) {
    const checkedCount = val.length
    checkall.value = checkedCount === options.length
    indeterminate.value = checkedCount > 0 && checkedCount < options.length
  }
</script>

<template>
  <Checkbox v-model="checkall" :indeterminate="indeterminate" @change="handleCheckAllChange">
    Check all
  </Checkbox>
  <br>
  <CheckboxGroup
    v-model="checkedVal"
    :options="options"
    @change="handleCheckedGroupChange"
  />
</template>

<script setup lang="ts">
  import { Select, SelectOption, Space } from '@lite-space/ui'

  const selectValue = ref('test1')
</script>

<template>
  <Space>
    <Select v-model="selectValue" placeholder="请选择">
      <SelectOption value="test1">
        test1
      </SelectOption>
      <SelectOption value="test2" title="test22">
        <SelectOption value="test4">
          test4
        </SelectOption>
        <SelectOption value="test5">
          test5
        </SelectOption>
      </SelectOption>
      <SelectOption value="test3">
        test3
      </SelectOption>
    </Select>

    <Select v-model="selectValue" placeholder="请选择">
      <SelectOption value="test1">
        test1
      </SelectOption>
      <SelectOption disabled value="test2">
        test2
      </SelectOption>
      <SelectOption value="test3">
        test3
      </SelectOption>
    </Select>
  </Space>
</template>

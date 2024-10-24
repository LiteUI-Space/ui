---
title: Select 选择器
description: 下拉选择器
---

## Installation

::CodePreview{title="基本用法" src="SelectBasic"}
最简单的用法
#code
```vue
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
      <SelectOption value="test2">
        <template #title>
          test123
        </template>
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
```
::

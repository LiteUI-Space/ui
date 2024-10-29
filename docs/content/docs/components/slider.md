---
title: Slider 滑块输入条
description: 滑动型输入器，展示当前值和可选范围。
---

## Installation

::CodePreview{title="基本用法" src="SliderBasic"}
基本使用

#code
```vue
<script setup lang="ts">
  import { Slider } from '@lite-space/ui'

  const slederValue = ref(30)
</script>

<template>
  <Slider v-model="slederValue" />
</template>
```
::

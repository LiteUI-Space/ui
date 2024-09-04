---
title: Empty 空状态
description: 空状态时的展示占位图
---

## Installation

::CodePreview{title="基本用法" src="EmptyBasic"}
简单的展示。
#code
```vue
<script setup lang="ts">
  import { Empty } from '@lite-space/ui'
</script>

<template>
  <Empty description="暂无数据" />
</template>
```
::

::CodePreview{title="选择图片" src="EmptyImage"}
可以通过`image`自定义图片，还可以通过`imageClass`自定义样式。
#code
```vue
<script setup lang="ts">
  import { Empty } from '@lite-space/ui'
</script>

<template>
  <Empty description="暂无数据" image-class="rounded border" image="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
</template>
```
::

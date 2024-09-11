---
title: Card 卡片
description: 通用卡片容器
---

## Installation

::CodePreview{title="基本用法" src="CardBasic"}
包含标题、内容、操作区域。
#code
```vue
<script setup lang="ts">
  import { Card } from '@lite-space/ui'
</script>

<template>
  <Card title="Default size card">
    <template #extra>
      <span>More</span>
    </template>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </card>
</template>
```
::

::CodePreview{title="简洁卡片" src="CardBody"}
只包含内容区域。
#code
```vue
<script setup lang="ts">
  import { Card } from '@lite-space/ui'
</script>

<template>
  <Card>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </card>
</template>
```
::

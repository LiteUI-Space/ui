---
title: Breadcrumb 面包屑
description: 显示当前页面在系统层级结构中的位置
---

## Installation

::CodePreview{title="基本用法" src="BreadcrumbBasic"}
最简单的用法。

#code
```vue
<script setup lang="ts">
  import { Breadcrumb, BreadcrumbItem } from '@lite-space/ui'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Application Center</BreadcrumbItem>
    <BreadcrumbItem>Application List</BreadcrumbItem>
  </Breadcrumb>

  <!-- 简写 -->
  <Breadcrumb :items="['Home', 'Application Center', 'Application List']" separator=">" />
</template>
```
::

::CodePreview{title="分隔符" src="BreadcrumbSeparator"}
使用 `separator=">"` 可以自定义分隔符。

#code
```vue
<script setup lang="ts">
  import { Breadcrumb, BreadcrumbItem } from '@lite-space/ui'
</script>

<template>
  <Breadcrumb separator=">">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Application Center</BreadcrumbItem>
    <BreadcrumbItem>Application List</BreadcrumbItem>
  </Breadcrumb>

  <Breadcrumb separator="i-carbon:car">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Application Center</BreadcrumbItem>
    <BreadcrumbItem>Application List</BreadcrumbItem>
  </Breadcrumb>
</template>
```
::

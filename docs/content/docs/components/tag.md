---
title: Tag
description: 进行标记和分类的小标签
---

## Installation

::CodePreview{title="基本用法" src="TagBasic"}
基本用法，可以通过`closeIcon`为可关闭标签并自定义关闭按钮，并且具有`close`事件。
#code
```vue
<script setup lang="ts">
  import { Tag } from '@lite-space/ui'
</script>

<template>
  <Tag>tag</Tag>
  <Tag close-icon>
    Docs
  </Tag>
  <Tag icon="i-carbon:bicycle">
    Icon
  </Tag>
  <Tag :bordered="false">
    tag
  </Tag>
</template>
```
::

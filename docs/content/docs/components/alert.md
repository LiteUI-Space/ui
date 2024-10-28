---
title: Alert 警告提示
description: 警告提示，展现需要关注的信息
---

## Installation

::CodePreview{title="基本用法" src="AlertBasic"}
最简单的用法，适用于简短的警告提示

#code
```vue
<script setup lang="ts">
  import { Alert } from '@lite-space/ui'
</script>

<template>
  <Alert icon="i-heroicons:at-symbol-16-solid" message="Heads up!" description="You can add components to your app using the cli." />
</template>
```
::

::CodePreview{title="可关闭的警告提示" src="AlertClose"}
显示关闭按钮，点击可关闭警告提示。

#code
```vue
<script setup lang="ts">
  import { Alert } from '@lite-space/ui'
</script>

<template>
  <Alert
    icon="i-heroicons:at-symbol-16-solid"
    message="Heads up!"
    description="You can add components to your app using the cli."
    closable
  />
</template>
```
::

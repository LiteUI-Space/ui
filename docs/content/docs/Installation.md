---
title: Installation
description: 本节将介绍如何在项目中使用 lite-space/ui。
---

## 快速开始

::CodeView
```shell
pnpm add @lite-space/ui @lite-space/theme
pnpm add unocss @iconify-json/heroicons -D
```
::

接着在`unocss.config`里配置`presetLite`
::CodeView
```ts
import { presetLite } from '@lite-space/theme'
export default defineConfig({
  // ...
  presets: [
    // ...
    presetLite()
  ]
})
```
::

接着就可以使用了
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button>我是 Button</Button>
</template>
```

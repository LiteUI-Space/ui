---
title: Installation
description: 本节将介绍如何在项目中使用 lite-space/ui。
---

# 快速开始

首先你需要安装`unocss`和`@lite-space/ui`

```shell
pnpm add unocss -D
pnpm add @lite-space/ui
pnpm add @lite-space/theme
```

然后在`unocss.config`里配置

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
接着就可以使用了
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button>我是 Button</Button>
</template>
```

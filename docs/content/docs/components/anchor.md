---
title: Anchor 锚点
description: 用于跳转到页面指定位置
---

## Installation

::CodePreview{title="基本用法" src="AnchorBasic"}
最简单的用法

#code
```vue
<script setup lang="ts">
  import { Anchor, AnchorLink } from '@lite-space/ui'
</script>

<template>
  <Anchor>
    <AnchorLink href="test1">
      test1
    </AnchorLink>
    <AnchorLink title="test2" href="test2">
      <AnchorLink href="test4">
        test4
      </AnchorLink>
      <AnchorLink href="test5">
        test5
      </AnchorLink>
    </AnchorLink>
    <AnchorLink href="test3">
      test3
    </AnchorLink>
  </Anchor>
</template>
```
::

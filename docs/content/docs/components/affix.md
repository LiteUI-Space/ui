---
title: Affix 固钉
description: 将页面元素钉在可视范围
---

## Installation

::CodePreview{title="基本用法" src="AffixBasic"}
最简单的用法

#code
```vue
<script setup lang="ts">
  import { Affix, Button } from '@lite-space/ui'
</script>

<template>
  <Affix :offset-top="10">
    <Button>Affix top</Button>
  </Affix>
</template>
```
::

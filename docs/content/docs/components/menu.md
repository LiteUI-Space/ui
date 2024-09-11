---
title: Menu 导航菜单
description: 为页面和功能提供导航的菜单列表
---

## Installation

::CodePreview{title="基本用法" src="MenuBasic"}
基本用法
#code

```vue
<script setup lang="ts">
  import { Menu, MenuItem } from '@lite-space/ui'

  const checked = ref('2')
</script>

<template>
  <Menu v-model="checked">
    <MenuItem value="0" icon="i-carbon:3d-cursor">
      navbar1
    </MenuItem>
    <MenuItem :value="1">
      navbar2
    </MenuItem>
    <MenuItem value="2">
      navbar3
    </MenuItem>
    <MenuItem
      value="3"
      title="navbarFater"
      icon="i-carbon:3d-cursor"
    >
      <MenuItem value="4">
        navbar4
      </MenuItem>
      <MenuItem value="5">
        navbar5
      </MenuItem>
    </MenuItem>
  </Menu>
</template>
```
::

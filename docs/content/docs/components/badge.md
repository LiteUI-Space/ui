---
title: Badge 徽标数
description: 图标右上角的圆形徽标数字
---

## Installation

::CodePreview{title="基本用法" src="BadgeBasic"}
简单的徽章展示，当 `value` 为 0 时，默认不显示，但是可以使用 `showZero` 修改为显示。

#code
```vue
<script setup lang="ts">
  import { Avatar, Badge, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Badge value="25">
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge value="0" show-zero>
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge>
      <template #value>
        slot
      </template>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot />
  </space>
</template>
```
::

::CodePreview{title="独立使用" src="BadgeNoSlot"}
不包裹任何元素即是独立使用，可自定样式展现

#code
```vue
<script setup lang="ts">
  import { Badge, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Badge value="25" />
    <Badge value="0" />
    <Badge dot />
  </space>
</template>
```
::

::CodePreview{title="封顶数字" src="BadgeMax"}
超过 `max` 的会显示为 ${max}+

#code
```vue
<script setup lang="ts">
  import { Avatar, Badge } from '@lite-space/ui'
</script>

<template>
  <Badge value="100" :max="99">
    <Avatar shape="square" size="large" />
  </Badge>
</template>
```
::

::CodePreview{title="自定义位置偏移" src="BadgeOffset"}
设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。

#code
```vue
<script setup lang="ts">
  import { Avatar, Badge } from '@lite-space/ui'
</script>

<template>
  <Badge value="25" :offset="[10, 5]">
    <Avatar shape="square" size="large" />
  </Badge>
</template>
```
::

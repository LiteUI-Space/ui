---
title: Space 间距
description: 设置组件之间的间距
---

## Installation

::CodePreview{title="基本用法" src="SpaceBasic"}
相邻组件水平间距。
#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button>small</Button>
    <Button>default</Button>
    <Button>large</Button>
    <Button type="primary">
      Confirm
    </Button>
  </Space>
</template>
```
::

::CodePreview{title="垂直间距" src="SpaceDirection"}
使用 `direction="vertical"` 设置垂直间距。
#code
```vue
<script setup lang="ts">
  import { Card, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <Card>Card1</Card>
    <Card>Card2</Card>
    <Card>Card3</Card>
  </Space>
</template>
```
::

::CodePreview{title="间距大小" src="SpaceSize"}
使用 `size` 设置元素之间的间距，预设了 `small`、`default`、`large` 三种尺寸，也可以自定义间距，若不设置 `size`，则默认为 `small`。
#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <div mb-4>
    <Space size="small">
      <Button>space small</Button>
      <Button>space small</Button>
      <Button>space small</Button>
    </Space>
  </div>
  <div mb-4>
    <Space size="default">
      <Button>space default</Button>
      <Button>space default</Button>
      <Button>space default</Button>
    </Space>
  </div>
  <div mb-4>
    <Space size="large">
      <Button>space large</Button>
      <Button>space large</Button>
      <Button>space large</Button>
    </Space>
  </div>
  <div mb-4>
    <Space :size="80">
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </Space>
  </div>
  <div class="w-600px">
    <Space :size="[8, 16]" wrap>
      <Button v-for="item in 20" :key="item">
        button
      </Button>
    </Space>
  </div>
</template>
```
::

---
title: Button
description: 按钮用于开始一个即时操作
---

## Installation

::CodePreview{title="按钮类型" src="Basic"}
按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button>button</Button>
    <Button type="text">
      Text Button
    </Button>
    <Button type="primary">
      Primary Button
    </Button>
    <Button type="link">
      Link button
    </Button>
  </Space>
</template>
```
::

::CodePreview{title="Block 按钮" src="Block"}
`block` 属性将使按钮适合其父宽度。

#code
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button block>
    button
  </Button>
  <Button type="text" block>
    Text Button
  </Button>
  <Button type="primary" block>
    Primary Button
  </Button>
  <Button type="link" block>
    Link button
  </Button>
</template>
```
::

::CodePreview{title="危险按钮" src="Danger"}
自定义为红色按钮。
#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button danger>
      button
    </Button>
    <Button type="text" danger>
      Text Button
    </Button>
    <Button type="primary" danger>
      Primary Button
    </Button>
    <Button type="link" danger>
      Link button
    </Button>
  </Space>
</template>
```
::

::CodePreview{title="不可用状态" src="Disabled"}
添加 `disabled` 属性即可让按钮处于不可用状态。
#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button disabled>
      button
    </Button>
    <Button type="text" disabled>
      Text Button
    </Button>
    <Button type="primary" disabled>
      Primary Button
    </Button>
    <Button type="link" disabled>
      Link button
    </Button>
  </Space>
</template>
```
::

::CodePreview{title="按钮图标" src="Icon"}
可以通过 `icon` 属性添加图标。
#code
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button icon="i-carbon:search">
    Button
  </Button>
  <Button type="text" icon="i-carbon:search">
    Text Button
  </Button>
  <Button
    type="primary"
    icon="i-carbon:email"
    danger
    icon-position="end"
  >
    Primary Button
  </Button>
  <Button
    type="link"
    icon="i-carbon:search"
    danger
  >
    button link
  </Button>
  <Button
    type="primary"
    icon="i-carbon:search "
    danger
  />
  <Button
    type="primary"
    icon="i-carbon:search "
    danger
    circle
  />
  <Button icon="i-carbon:logo-github" circle />
  <Button icon="i-carbon:logo-github" />
  <Button
    type="primary"
  >
    <template #icon>
      <span i-carbon:3d-cursor />
    </template>
    icon slot
  </Button>
</template>
```
::

::CodePreview{title="移除两个汉字之间的空格" src="TwoCNChars"}
默认在只有中文字符之间会有一个空格，可以通过 `autoInsertSpaceInButton` 属性来移除。
#code
```vue
<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button auto-insert-space>
      取消
    </Button>
    <Button
      type="primary"
      auto-insert-space
    >
      确认
    </Button>
    <Button
      type="primary"
    >
      确认了吗?
    </Button>
    <Button
      type="primary"
    >
      <div>
        <span>span</span>
        <span>test</span>
      </div>
    </Button>
  </Space>
</template>
```
::

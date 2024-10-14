---
title: Popconfirm  气泡确认框
description: 点击元素，弹出气泡式的确认框。
---

## Installation

::CodePreview{title="基本用法" src="PopconfirmBasic"}
最简单的用法，支持确认标题和描述。
#code
```vue
<script setup lang="ts">
  import { Button, Popconfirm } from '@lite-space/ui'
</script>

<template>
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    <Button danger>
      Delete
    </Button>
  </Popconfirm>
</template>
```
::

::CodePreview{title="自定义 Icon 图标" src="PopconfirmIcon"}
使用 `icon` 自定义提示 `icon`。

#code
```vue
<script setup lang="ts">
  import { Button, Popconfirm } from '@lite-space/ui'
</script>

<template>
  <Popconfirm
    icon="i-carbon:accessibility"
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    <Button danger>
      Delete
    </Button>
  </Popconfirm>
</template>
```
::

::CodePreview{title="位置" src="PopconfirmPlacement"}
位置有 12 个方向。

#code
```vue
<script setup lang="ts">
  import { Button, Popconfirm, Space } from '@lite-space/ui'

  const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ placement, text }">
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      ok-text="Yes"
      cancel-text="No"
      :placement="placement"
    >
      <Button class="w-18">
        {{ text }}
      </Button>
    </Popconfirm>
  </DefineTemplate>
  <div px-6>
    <div ml-20>
      <Space>
        <ReuseTemplate placement="top-start" text="TL" />
        <ReuseTemplate placement="top" text="Top" />
        <ReuseTemplate placement="top-end" text="TR" />
      </Space>
    </div>
    <div flex="~ items-center justify-between">
      <div>
        <Space direction="vertical">
          <ReuseTemplate placement="left-start" text="LT" />
          <ReuseTemplate placement="left" text="Left" />
          <ReuseTemplate placement="left-end" text="LB" />
        </Space>
      </div>
      <div>
        <Space direction="vertical">
          <ReuseTemplate placement="right-start" text="RT" />
          <ReuseTemplate placement="right" text="Right" />
          <ReuseTemplate placement="right-end" text="RB" />
        </Space>
      </div>
    </div>
    <div ml-20>
      <Space>
        <ReuseTemplate placement="bottom-start" text="BL" />
        <ReuseTemplate placement="bottom" text="Bottom" />
        <ReuseTemplate placement="bottom-end" text="BR" />
      </Space>
    </div>
  </div>
</template>
```
::

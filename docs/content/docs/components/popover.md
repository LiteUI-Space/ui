---
title: Popover 气泡卡片
description: 点击/鼠标移入元素，弹出气泡式的卡片浮层。
---

## Installation

::CodePreview{title="基本用法" src="PopoverBasic"}
最简单的用法，浮层的大小由内容区域决定。
#code
```vue
<script setup lang="ts">
  import { Button, Popover, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Popover title="测试Title">
      <Button>Hover me</Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
    <Popover trigger="click" title="测试Title">
      <Button>click me</Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
  </Space>
</template>
```
::

::CodePreview{title="位置" src="PopoverPlacement"}
位置有 12 个方向。

#code
```vue
<script setup lang="ts">
  import { Button, Popover, Space } from '@lite-space/ui'

  const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ placement, text }">
    <Popover :placement="placement" title="测试Title">
      <Button class="w-18">
        {{ text }}
      </Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
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

::CodePreview{title="偏移" src="PopoverOffest"}
使用 `offset` 属性设置偏移量。

#code
```vue
<script setup lang="ts">
  import { Button, Popover } from '@lite-space/ui'
</script>

<template>
  <Popover title="测试Title" :offset="30">
    <Button>Hover me</Button>
    <template #content>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </template>
  </Popover>
</template>
```
::

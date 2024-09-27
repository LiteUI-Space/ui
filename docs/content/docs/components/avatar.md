---
title: Avatar 头像
description: 用来代表用户或事物，支持图片、图标或字符展示
---

## Installation

::CodePreview{title="基本用法" src="AvatarBasic"}
头像有三种尺寸，两种形状可选

#code
```vue
<script setup lang="ts">
  import { Avatar, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical" :size="20">
    <Space :size="20">
      <Avatar :size="64" icon="i-carbon:user" />
      <Avatar size="large" icon="i-carbon:user" />
      <Avatar icon="i-carbon:user" />
      <Avatar size="small" icon="i-carbon:user" />
    </Space>

    <Space :size="20">
      <Avatar shape="square" :size="64" icon="i-carbon:user" />
      <Avatar shape="square" size="large" icon="i-carbon:user" />
      <Avatar shape="square" icon="i-carbon:user" />
      <Avatar shape="square" size="small" icon="i-carbon:user" />
    </Space>
  </space>
</template>
```
::

::CodePreview{title="类型" src="AvatarType"}
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

#code
```vue
<script setup lang="ts">
  import { Avatar, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Avatar icon="i-carbon:user" />
    <Avatar icon="i-carbon:bot" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-rose-300 text-rose-500">
      U
    </Avatar>
    <Avatar icon="i-carbon:bot" class="bg-sky-400" />
  </Space>
</template>
```
::

::CodePreview{title="头像组合" src="AvatarGroup"}
头像组合展现

#code
```vue
<script setup lang="ts">
  import { Avatar, AvatarGroup, Divider } from '@lite-space/ui'
</script>

<template>
  <AvatarGroup>
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" icon="i-carbon:user" />
  </AvatarGroup>
  <Divider />
  <AvatarGroup size="large">
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" icon="i-carbon:user" />
  </AvatarGroup>
  <Divider />
  <AvatarGroup shape="square">
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" icon="i-carbon:user" />
  </AvatarGroup>
</template>
```
::

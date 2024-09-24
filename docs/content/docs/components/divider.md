---
title: Divider 分割线
description: 区隔内容的分割线。
---

## Installation

::CodePreview{title="水平分割线" src="DividerBasic"}
默认为水平分割线，可在中间加入文字
#code
```vue
<script setup lang="ts">
  import { Divider } from '@lite-space/ui'
</script>

<template>
  <p mb-2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <Divider />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <Divider dashed />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
```
::

::CodePreview{title="带文字的分割线" src="DividerOrientation"}
分割线中带有文字，可以用 `orientation` 指定文字位置。
#code
```vue
<script setup lang="ts">
  import { Divider } from '@lite-space/ui'
</script>

<template>
  <p mb-2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <Divider orientation="left">
    text
  </Divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <Divider dashed>
    text
  </Divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <Divider orientation="right">
    text
  </Divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
```
::

::CodePreview{title="垂直分割线" src="DividerVertical"}
使用 `type="vertical"` 设置为行内的垂直分割线。
#code
```vue
<script setup lang="ts">
  import { Divider } from '@lite-space/ui'
</script>

<template>
  <div text-sm>
    <span>Text</span>
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" dashed />
    <a href="#">Link</a>
  </div>
</template>
```
::

::CodePreview{title="自定义间距" src="DividerMargin"}
可以使用 `margin` 自定义间距。
#code
```vue
<script setup lang="ts">
  import { Divider, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <div text-sm>
      <span>Text</span>
      <Divider :margin="12" />
      <a href="#">Link</a>
      <Divider margin="16px" dashed />
      <a href="#">Link</a>
    </div>

    <div text-sm>
      <span>Text</span>
      <Divider :margin="12" type="vertical" />
      <a href="#">Link</a>
      <Divider margin="16px" type="vertical" dashed />
      <a href="#">Link</a>
    </div>
  </Space>
</template>
```
::

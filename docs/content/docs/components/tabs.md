---
title: Tabs 标签页
description: 选项卡切换组件
client: true
---

## Installation

::CodePreview{title="基本用法" src="TabsBasic"}
默认选中第一项。
#code
```vue
<script setup lang="ts">
  import { TabPane, Tabs } from '@lite-space/ui'

  const activeKey = ref('1')
</script>

<template>
  <Tabs v-model="activeKey">
    <TabPane key="1" name="tab1">
      Tab1 content
    </TabPane>
    <TabPane key="2" name="tab2">
      Tab2 content
    </TabPane>
    <TabPane key="3" name="Tab3">
      Tab3 content
    </TabPane>
  </Tabs>
</template>
```
::

::CodePreview{title="禁用" src="TabsDisabled"}
禁用某一项。
#code
```vue
<script setup lang="ts">
  import { TabPane, Tabs } from '@lite-space/ui'
</script>

<template>
  <Tabs>
    <TabPane key="1" name="tab1">
      Tab1 content
    </TabPane>
    <TabPane key="2" disabled name="tab2">
      Tab2 content
    </TabPane>
    <TabPane key="3" name="Tab3">
      Tab3 content
    </TabPane>
  </Tabs>
</template>
```
::

::CodePreview{title="位置" src="TabsAlign"}
可通过设置`align`选项卡的位置。
#code
```vue
<script setup lang="ts">
  import { TabPane, Tabs } from '@lite-space/ui'
</script>

<template>
  <Tabs align="center">
    <TabPane key="1" name="tab1">
      Tab1 content
    </TabPane>
    <TabPane key="2" name="tab2">
      Tab2 content
    </TabPane>
    <TabPane key="3" name="Tab3">
      Tab3 content
    </TabPane>
  </Tabs>
</template>
```
::

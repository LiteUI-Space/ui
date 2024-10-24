---
title: Switch 开关
description: 开关选择器
---

## Installation

::CodePreview{title="基本用法" src="SwitchBasic"}
最简单的用法
#code
```vue
<script setup lang="ts">
  import { Switch } from '@lite-space/ui'

  const checked = ref(true)
</script>

<template>
  <Switch v-model="checked" />
</template>
```
::

::CodePreview{title="不可用" src="SwitchDisabled"}
`Switch` 禁用状态
#code
```vue
<script setup lang="ts">
  import { Switch } from '@lite-space/ui'

  const checked = ref(true)
</script>

<template>
  <Switch v-model="checked" disabled />
</template>
```
::

::CodePreview{title="文字和图标" src="TextAndIcon"}
带有文字和图标
#code
```vue
<script setup lang="ts">
  import { Switch } from '@lite-space/ui'

  const value1 = ref(true)
  const value2 = ref(true)
</script>

<template>
  <Switch v-model="value1" checked-children="i-carbon:accessibility" un-checked-children="i-carbon:accessibility-alt" />
  <Switch v-model="value2" checked-children="开" un-checked-children="关" />
  <Switch>
    <template #checkedChildren>
      <span>开</span>
    </template>
    <template #unCheckedChildren>
      <span>关</span>
    </template>
  </Switch>
</template>
```
::

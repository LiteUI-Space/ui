---
title: Input 输入框
description: 通过鼠标或键盘输入内容，是最基础的表单域的包装。
---

## Installation

::CodePreview{title="基本用法" src="InputBasic"}
基本用法
#code

```vue
<script setup lang="ts">
  import { Input } from '@lite-space/ui'
</script>

<template>
  <Input placeholder="Please Input" />
</template>
```

::

::CodePreview{title="三种大小" src="InputSize"}
使用 `size` 设置输入框的大小。
#code

```vue
<script setup lang="ts">
  import { Input, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <Input size="small" placeholder="Please Input" />
    <Input size="default" placeholder="Please Input" />
    <Input size="large" placeholder="Please Input" />
  </Space>
</template>
```

::

::CodePreview{title="前置/后置标签" src="InputAddon"}
用于配置一些固定组合。
#code

```vue
<script setup lang="ts">
  import { Input, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <Input addon-before="http://" placeholder="default size" />
    <Input addon-after=".com" placeholder="default size" />
    <Input addon-before="http://" placeholder="default size" addon-after=".com" />
    <Input placeholder="default size">
      <template #addonBefore>
        <span>http://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </Input>
  </Space>
</template>
```
::

::CodePreview{title="前缀和后缀" src="InputFix"}
在输入框上添加前缀或后缀图标。
#code

```vue
<script setup lang="ts">
  import { Input, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <Input prefix="i-carbon:user-avatar" placeholder="default size" suffix="i-carbon:customer" />
    <Input prefix="$" placeholder="default size" suffix="rmb" />
    <Input placeholder="default size" suffix="rmb">
      <template #prefix>
        <span>$</span>
      </template>
      <template #suffix>
        <span>rmb</span>
      </template>
    </Input>
    <Input
      disabled
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
  </Space>
</template>
```
::

::CodePreview{title="密码框" src="InputPassword"}
密码框。
#code

```vue
<script setup lang="ts">
  import { Button, InputPassword } from '@lite-space/ui'

  const visible = ref(true)
  function handleChange(data: boolean) {
    console.log('data', data)
  }
</script>

<template>
  <InputPassword
    v-model:visible="visible"
    @change="handleChange"
  >
    <template #suffix>
      <span>123</span>
    </template>
  </InputPassword>
  <Button type="primary" @click="visible = !visible">
    {{ visible }}
  </Button>
</template>
```
::

::CodePreview{title="带移除图标" src="InputClearable"}
带移除图标的输入框，点击图标删除所有内容。
#code

```vue
<script setup lang="ts">
  import { Input } from '@lite-space/ui'

  function handleClear() {
    console.log('clear')
  }
</script>

<template>
  <Input
    clearable
    placeholder="clearable"
    @clear="handleClear"
  />
</template>
```
::

::CodePreview{title="文本域" src="TextArea"}
用于多行输入。
#code

```vue
<script setup lang="ts">
  import { Space, TextArea } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <TextArea />
    <TextArea :resize="false" />
  </Space>
</template>
```
::

---
title: Radio 单选框
description: 用于在多个备选项中选中单个状态。
---

## Installation

::CodePreview{title="基本用法" src="RadioBasic"}
基本用法
#code

```vue
<script setup lang="ts">
  import { Radio } from '@lite-space/ui'
  import type { RadioChangeEvent } from '@lite-space/ui'

  function handleChange(val: RadioChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <Radio @change="handleChange">
    Radio
  </Radio>
  <Radio :model-value="true">
    Radio checked
  </Radio>
</template>
```

::

::CodePreview{title="禁用" src="RadioDisabled"}
Radio 不可用。
#code

```vue
<script setup lang="ts">
  import { Radio } from '@lite-space/ui'
</script>

<template>
  <Radio disabled>
    Radio
  </Radio>
  <Radio disabled :model-value="true">
    Radio checked
  </Radio>
</template>
```

::

::CodePreview{title="单选组合" src="RadioGroup"}
一组互斥的 Radio 配合使用。
#code

```vue
<script setup lang="ts">
  import { Radio, RadioGroup } from '@lite-space/ui'
  import type { RadioChangeEvent } from '@lite-space/ui'

  const modelValue = ref('0')
  function handleChange(value: RadioChangeEvent) {
    console.log('value ', value)
  }
</script>

<template>
  <RadioGroup v-model="modelValue" @change="handleChange">
    <Radio value="0">
      Apple
    </Radio>
    <Radio value="Pear">
      Pear
    </Radio>
    <Radio :value="2">
      orange
    </Radio>
  </RadioGroup>
</template>
```

::

::CodePreview{title="单选组合 - 配合 options 使用" src="RadioOptions"}
使用`optiosn`属性，用于快速生成一组 Radio。
#code
```vue
<script setup lang="ts">
  import { RadioGroup } from '@lite-space/ui'
  import type { RadioChangeEvent, RadioGroupProps } from '@lite-space/ui'

  const options = ['Apple', 'Pear', 'Orange']
  const options1: RadioGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2: RadioGroupProps['options'] = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]

  const checkval = ref('Apple')
  const checkval1 = ref('0')
  const checkval2 = ref('Apple')

  function handleChange(value: RadioChangeEvent) {
    console.log('value ', value)
  }
</script>

<template>
  <RadioGroup v-model="checkval" :options="options" @change="handleChange" />
  <br>
  <RadioGroup v-model="checkval1 " :options="options1" @change="handleChange" />
  <br>
  <RadioGroup v-model="checkval2" :options="options2" @change="handleChange" />
</template>
```
::

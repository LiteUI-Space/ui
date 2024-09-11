---
title: Checkbox 多选框
description: 收集用户的多项选择。
---

## Installation

::CodePreview{title="基本用法" src="CheckboxBasic"}
基本用法
#code

```vue
<script setup lang="ts">
  import { Checkbox } from '@lite-space/ui'

  const checkedVal = ref(false)
</script>

<template>
  <Checkbox v-model="checkedVal">
    Checkbox
  </Checkbox>
  <Checkbox :model-value="true">
    Checkbox checked
  </Checkbox>
  <Checkbox :model-value="true" readonly>
    Checkbox checked readonly
  </Checkbox>
</template>
```
::

::CodePreview{title="禁用" src="CheckboxDisabled"}
Checkbox 不可用。
#code

```vue
<script setup lang="ts">
  import { Checkbox } from '@lite-space/ui'

  const checkedVal = ref(false)
</script>

<template>
  <Checkbox v-model="checkedVal" disabled>
    Checkbox
  </Checkbox>
  <Checkbox indeterminate disabled>
    Checkbox indeterminate
  </Checkbox>
  <Checkbox :model-value="true" disabled>
    Checkbox checked
  </Checkbox>
</template>
```

::

::CodePreview{title="多选组合" src="CheckboxGroup"}
一组 Checkbox 配合使用。
#code

```vue
<script setup lang="ts">
  import { Checkbox, CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent } from '@lite-space/ui'

  const checkedVal = ref(['Apple'])
  function handleChange(val: boolean | CheckboxGroupChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <CheckboxGroup v-model="checkedVal" @change="handleChange">
    <Checkbox value="Apple">
      Apple
    </Checkbox>
    <Checkbox :value="0">
      Pear
    </Checkbox>
    <Checkbox value="or">
      Orange
    </Checkbox>
  </CheckboxGroup>
</template>
```

::

::CodePreview{title="多选组合 - 配合 options 使用" src="CheckboxOptions"}
使用`optiosn`属性，用于快速生成一组 Checkbox。
#code
```vue
<script setup lang="ts">
  import { CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent, CheckboxGroupProps } from '@lite-space/ui'

  const checkval = ref(['Apple'])
  const checkval1 = ref(['0', 'Orange'])
  const checkval2 = ref(['Apple'])

  const options = ['Apple', 'Pear', 'Orange']
  const options1: CheckboxGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2: CheckboxGroupProps['options'] = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear', readonly: true }, { label: 'Orange', value: 'Orange' }]

  function handleChange(val: boolean | CheckboxGroupChangeEvent) {
    console.log('val', val)
  }
</script>

<template>
  <CheckboxGroup v-model="checkval" :options="options" />
  <br>
  <CheckboxGroup v-model="checkval1 " :options="options1" @change="handleChange" />
  <br>
  <CheckboxGroup v-model="checkval2" :options="options2" />
</template>
```

::

::CodePreview{title="全选" src="CheckboxIndeterminate"}
在实现全选效果时，你可能会用到 `indeterminate` 属性
#code

```vue
<script setup lang="ts">
  import { Checkbox, CheckboxGroup } from '@lite-space/ui'
  import type { CheckboxGroupChangeEvent } from '@lite-space/ui'

  const options = ['Apple', 'Pear', 'Orange']
  const checkedVal = ref(['Apple'])
  const checkall = ref(false)

  const indeterminate = ref(true)
  function handleCheckAllChange(val: boolean) {
    console.log('val', val)
    checkedVal.value = val ? [...options] : []
    indeterminate.value = false
  }
  function handleCheckedGroupChange(val: CheckboxGroupChangeEvent) {
    const checkedCount = val.length
    checkall.value = checkedCount === options.length
    indeterminate.value = checkedCount > 0 && checkedCount < options.length
  }
</script>

<template>
  <Checkbox v-model="checkall" :indeterminate="indeterminate" @change="handleCheckAllChange">
    Check all
  </Checkbox>
  <br>
  <CheckboxGroup
    v-model="checkedVal"
    :options="options"
    @change="handleCheckedGroupChange"
  />
</template>
```
::

---
title: Dropdown 下拉菜单
description: 向下弹出的列表。
---

## Installation

::CodePreview{title="基本用法" src="DropdownBasic"}
最简单的下拉菜单。
#code
```vue
<script setup lang="ts">
  import { Dropdown, DropdownItem } from '@lite-space/ui'
</script>

<template>
  <Dropdown>
    <a class="text-sm cursor-pointer">
      Hover Me
      <span i-heroicons:chevron-down class=" inline-block align-middle text-gray-400" />
    </a>
    <template #content>
      <DropdownItem>test2</DropdownItem>
      <DropdownItem divider>
        test3
      </DropdownItem>
      <DropdownItem>test4</DropdownItem>
      <DropdownItem title="test5">
        <DropdownItem>
          test7
        </DropdownItem>
        <DropdownItem>test8</DropdownItem>
      </DropdownItem>
      <DropdownItem>test6</DropdownItem>
    </template>
  </Dropdown>
</template>
```
::

::CodePreview{title="右键菜单" src="DropdownRightMenus"}
默认是移入触发菜单，可以点击鼠标右键触发。弹出菜单位置会跟随右键点击位置变动。

#code
```vue
<script setup lang="ts">
  import { Dropdown, DropdownItem } from '@lite-space/ui'
</script>

<template>
  <Dropdown trigger="contextMenu">
    <div
      class="w-70 h-40 text-gray-400 bg-gray-300 flex-center"
    >
      Right Click on here
    </div>
    <template #content>
      <DropdownItem>test2</DropdownItem>
      <DropdownItem divider>
        test3
      </DropdownItem>
      <DropdownItem>test4</DropdownItem>
      <DropdownItem title="test5">
        <DropdownItem>
          test7
        </DropdownItem>
        <DropdownItem>test8</DropdownItem>
      </DropdownItem>
      <DropdownItem>test6</DropdownItem>
    </template>
  </Dropdown>
</template>
```
::

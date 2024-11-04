---
title: Tooltip 文字提示
description: 简单的文字提示气泡框
---

## Installation

::CodePreview{title="基本用法" src="TooltipBasic"}
最简单的用法。

#code
```vue
<script setup lang="ts">
  import { Tooltip } from '@lite-space/ui'
</script>

<template>
  <Tooltip content="prompt text">
    <span class="text-sm">鼠标进入时将显示工具提示</span>
  </Tooltip>
</template>
```
::

::CodePreview{title="位置" src="TooltipPlacement"}
位置有 12 个方向。

#code
```vue
<script setup lang="ts">
  import { Button, Space, Tooltip } from '@lite-space/ui'
</script>

<template>
  <div class="flex-center">
    <div px-6>
      <div ml-20>
        <Space>
          <Tooltip placement="top-start" content="prompt text">
            <Button class="w-18">
              TL
            </Button>
          </Tooltip>
          <Tooltip placement="top" content="prompt text">
            <Button class="w-18">
              Top
            </Button>
          </Tooltip>
          <Tooltip placement="top-end" content="prompt text">
            <Button class="w-18">
              TR
            </Button>
          </Tooltip>
        </Space>
      </div>
      <div flex="~ items-center ">
        <div>
          <Space direction="vertical">
            <Tooltip placement="left-start" content="prompt text">
              <Button class="w-18">
                LT
              </Button>
            </Tooltip>
            <Tooltip placement="left" content="prompt text">
              <Button class="w-18">
                Left
              </Button>
            </Tooltip>
            <Tooltip placement="left-end" content="prompt text">
              <Button class="w-18">
                LB
              </Button>
            </Tooltip>
          </Space>
        </div>
        <div ml-62>
          <Space direction="vertical">
            <Tooltip placement="right-start" content="prompt text">
              <Button class="w-18">
                RT
              </Button>
            </Tooltip>
            <Tooltip placement="right" content="prompt text">
              <Button class="w-18">
                Right
              </Button>
            </Tooltip>
            <Tooltip placement="right-end" content="prompt text">
              <Button class="w-18">
                RB
              </Button>
            </Tooltip>
          </Space>
        </div>
      </div>
      <div ml-20>
        <Space>
          <Tooltip placement="bottom-start" content="prompt text">
            <Button class="w-18">
              BL
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" content="prompt text">
            <Button class="w-18">
              Bottom
            </Button>
          </Tooltip>
          <Tooltip placement="bottom-end" content="prompt text">
            <Button class="w-18">
              BR
            </Button>
          </Tooltip>
        </Space>
      </div>
    </div>
  </div>
</template>
```
::

::CodePreview{title="偏移" src="TooltipOffest"}
使用 `offset` 属性设置偏移量。

#code
```vue
<script setup lang="ts">
  import { Tooltip } from '@lite-space/ui'
</script>

<template>
  <Tooltip content="prompt text" :offset="10">
    <span class="text-sm">鼠标进入时将显示工具提示</span>
  </Tooltip>
</template>
```
::

<script setup lang="ts">
  import { Tooltip } from '@lite-space/ui'
</script>

<template>
  <Tooltip content="prompt text" :offset="10">
    <span class="text-sm">鼠标进入时将显示工具提示</span>
  </Tooltip>
</template>

<script setup lang="ts">
  import { Button, Popover } from '@lite-space/ui'
</script>

<template>
  <Popover title="测试Title">
    <Button>Hover me</Button>
    <template #content>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </template>
  </Popover>
</template>

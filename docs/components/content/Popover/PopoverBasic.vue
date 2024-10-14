<script setup lang="ts">
  import { Button, Popover, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Popover title="测试Title">
      <Button>Hover me</Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
    <Popover trigger="click" title="测试Title">
      <Button>click me</Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
  </Space>
</template>

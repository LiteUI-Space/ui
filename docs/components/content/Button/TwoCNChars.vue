<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button auto-insert-space>
      取消
    </Button>
    <Button
      type="primary"
      auto-insert-space
    >
      确认
    </Button>
    <Button
      type="primary"
    >
      确认了吗?
    </Button>
    <Button
      type="primary"
    >
      <div>
        <span>span</span>
        <span>test</span>
      </div>
    </Button>
  </Space>
</template>

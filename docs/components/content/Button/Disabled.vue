<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Button disabled>
      button
    </Button>
    <Button type="text" disabled>
      Text Button
    </Button>
    <Button type="primary" disabled>
      Primary Button
    </Button>
    <Button type="link" disabled>
      Link button
    </Button>
  </Space>
</template>

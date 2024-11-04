<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical" class="grid gap-1">
    <div>
      <Button icon="i-carbon:search">
        Button
      </Button>
      <Button type="text" icon="i-carbon:search">
        Text Button
      </Button>
    </div>
    <div>
      <Button
        type="primary"
        icon="i-carbon:email"
        danger
        icon-position="end"
      >
        Primary Button
      </Button>
      <Button type="link" icon="i-carbon:search" danger>
        button link
      </Button>
    </div>
    <div>
      <Space>
        <Button type="primary" icon="i-carbon:search " danger />
        <Button
          type="primary"
          icon="i-carbon:search "
          danger
          circle
        />
      </Space>
    </div>
    <div>
      <Space>
        <Button icon="i-carbon:logo-github" />
        <Button icon="i-carbon:logo-github" circle />
      </Space>
    </div>
    <div>
      <Button type="primary">
        <template #icon>
          <span i-carbon:3d-cursor />
        </template>
        icon slot
      </Button>
    </div>
  </Space>
</template>

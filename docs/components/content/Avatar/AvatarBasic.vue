<script setup lang="ts">
  import { Avatar, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical" :size="20">
    <Space :size="20">
      <Avatar :size="64" icon="i-carbon:user" />
      <Avatar size="large" icon="i-carbon:user" />
      <Avatar icon="i-carbon:user" />
      <Avatar size="small" icon="i-carbon:user" />
    </Space>

    <Space :size="20">
      <Avatar shape="square" :size="64" icon="i-carbon:user" />
      <Avatar shape="square" size="large" icon="i-carbon:user" />
      <Avatar shape="square" icon="i-carbon:user" />
      <Avatar shape="square" size="small" icon="i-carbon:user" />
    </Space>
  </space>
</template>

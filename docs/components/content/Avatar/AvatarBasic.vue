<script setup lang="ts">
  import { Avatar, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical" :size="20">
    <Space :size="20">
      <Avatar :size="64" />
      <Avatar size="large" />
      <Avatar />
      <Avatar size="small" />
    </Space>

    <Space :size="20">
      <Avatar shape="square" :size="64" />
      <Avatar shape="square" size="large" />
      <Avatar shape="square" />
      <Avatar shape="square" size="small" />
    </Space>
  </space>
</template>

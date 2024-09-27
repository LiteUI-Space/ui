<script setup lang="ts">
  import { Avatar, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Avatar />
    <Avatar icon="i-carbon:bot" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-rose-300 text-rose-500">
      U
    </Avatar>
    <Avatar icon="i-carbon:bot" class="bg-sky-400" />
  </Space>
</template>

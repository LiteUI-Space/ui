<script setup lang="ts">
  import { Space, TextArea } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <TextArea />
    <TextArea :resize="false" />
  </Space>
</template>

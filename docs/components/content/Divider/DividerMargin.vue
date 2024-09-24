<script setup lang="ts">
  import { Divider, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <div text-sm>
      <span>Text</span>
      <Divider margin="16px" />
      <a href="#">Link</a>
      <Divider :margin="10" dashed />
      <a href="#">Link</a>
    </div>

    <div text-sm>
      <span>Text</span>
      <Divider :margin="12" type="vertical" />
      <a href="#">Link</a>
      <Divider margin="16px" type="vertical" dashed />
      <a href="#">Link</a>
    </div>
  </Space>
</template>

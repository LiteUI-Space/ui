<script setup lang="ts">
  import { Input, Space } from '@lite-space/ui'
</script>

<template>
  <Space direction="vertical">
    <Input addon-before="http://" placeholder="default size" />
    <Input addon-after=".com" placeholder="default size" />
    <Input addon-before="http://" placeholder="default size" addon-after=".com" />
    <Input placeholder="default size">
      <template #addonBefore>
        <span>http://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </Input>
  </Space>
</template>

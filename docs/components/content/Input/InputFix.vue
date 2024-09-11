<script setup lang="ts">
  import { Input, Space } from '@lite-space/ui'
  </script>

<template>
  <Space direction="vertical">
    <Input
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input
      prefix="$"
      placeholder="default size"
      suffix="rmb"
    />
    <Input placeholder="default size" suffix="rmb">
      <template #prefix>
        <span>$</span>
      </template>
      <template #suffix>
        <span>rmb</span>
      </template>
    </Input>
    <Input
      disabled
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
  </Space>
</template>

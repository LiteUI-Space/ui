<script setup lang="ts">
  import { Avatar, Badge, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Badge value="25">
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge value="0" show-zero>
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge>
      <template #value>
        slot
      </template>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot />
  </space>
</template>

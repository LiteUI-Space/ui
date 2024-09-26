<script setup lang="ts">
  import { Badge, Space } from '@lite-space/ui'
</script>

<template>
  <Space :size="20">
    <Badge value="25">
      <div class="w-40px h-40px bg-gray-300 rounded-md" />
    </Badge>

    <Badge value="0" show-zero>
      <div class="w-40px h-40px bg-gray-300 rounded-md" />
    </Badge>

    <Badge>
      <template #value>
        slot
      </template>
      <div class="w-40px h-40px bg-gray-300 rounded-md" />
    </Badge>
    <Badge dot />
  </space>
</template>

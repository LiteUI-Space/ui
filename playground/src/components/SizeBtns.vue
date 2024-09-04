<script setup lang="ts">
  import type { LtComponentSize } from '@lite-space/ui'

  import { Button, Space } from '@lite-space/ui'

  const sizeList: LtComponentSize[] = ['small', 'default', 'large']
  const modelValue = defineModel({ default: 'default' })
</script>

<template>
  <Space>
    <Button
      v-for="item in sizeList"
      :key="item"
      size="small"
      @click="modelValue = item"
    >
      {{ item }}
    </Button>
  </Space>
</template>

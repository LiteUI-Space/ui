<script setup lang="ts">
  import type { LtComponentSize } from '@lite-ui/ui'

  import { Button, Space } from '@lite-ui/ui'

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

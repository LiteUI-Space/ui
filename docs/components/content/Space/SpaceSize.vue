<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'
</script>

<template>
  <div mb-4>
    <Space size="small">
      <Button>space small</Button>
      <Button>space small</Button>
      <Button>space small</Button>
    </Space>
  </div>
  <div mb-4>
    <Space size="default">
      <Button>space default</Button>
      <Button>space default</Button>
      <Button>space default</Button>
    </Space>
  </div>
  <div mb-4>
    <Space size="large">
      <Button>space large</Button>
      <Button>space large</Button>
      <Button>space large</Button>
    </Space>
  </div>
  <div mb-4>
    <Space :size="80">
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </Space>
  </div>
  <div class="w-600px">
    <Space :size="[8, 16]" wrap>
      <Button v-for="item in 20" :key="item">
        button
      </Button>
    </Space>
  </div>
</template>

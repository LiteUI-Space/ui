<script setup lang="ts">
  import type { LtComponentSize } from '@lite-ui/ui'

  import { Empty } from '@lite-ui/ui'
  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
</script>

<template>
  <Empty description="暂无数据" />

  <DemoBlock title="description">
    <Empty />
    <Empty description="暂无数据" />
    <Empty>
      <template #description>
        暂无数据1
      </template>
      <div>测试测试测试</div>
    </Empty>
  </DemoBlock>

  <DemoBlock title="image">
    <Empty description="暂无数据" image="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Empty image-class="rounded border" image="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  </DemoBlock>
</template>

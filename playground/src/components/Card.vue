<script setup lang="ts">
  import type { LtComponentSize } from '@lite-space/ui'

  import { Card } from '@lite-space/ui'
  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
</script>

<template>
  <Card title="Default size card">
    <p class="m-0 p-0">
      Card content
    </p>
    <p class="m-0 p-0">
      Card content
    </p>
    <p class="m-0 p-0">
      Card content
    </p>
  </Card>

  <DemoBlock title="header">
    <Card title="组件库">
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
    </card>

    <Card title="组件库">
      <template #title>
        组件库1
      </template>

      <template #extra>
        <a>更多</a>
      </template>

      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
    </Card>

    <Card title="组件库">
      <template #header>
        组件库1
      </template>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
      <template #footer>
        <a>更多</a>
      </template>
    </Card>
  </DemoBlock>

  <DemoBlock title="ceontent">
    <Card>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
      <p class="m-0 p-0">
        Card content
      </p>
    </card>
  </DemoBlock>
</template>

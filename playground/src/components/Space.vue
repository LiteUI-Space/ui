<script setup lang="ts">
  import type { LtComponentSize } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Button, Input, Space } from '@lite-ui/ui'

  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
  const sizeNum = ref< number>(0)
</script>

<template>
  <Button @click="sizeNum++">
    sizeNum
  </Button>
  <DemoBlock title="sizeNum">
    <Space :size="sizeNum">
      <Button>small</Button>
      <Button>default</Button>
      <Button>large</Button>
      <Button>large1</Button>
      <Button>large2</Button>
      <Button>large3</Button>
    </Space>
  </DemoBlock>
  <DemoBlock title="horizontal">
    <Space :size="size">
      <Button>small</Button>
      <Button>default</Button>
      <Button>large</Button>
      <Button>large1</Button>
      <Button>large2</Button>
      <Button>large3</Button>
    </Space>
  </DemoBlock>

  <DemoBlock title="vertical">
    <Space :size="size" direction="vertical">
      <span>test</span>
      <Button>button</Button>
      <Input />
      <div>
        123
      </div>
    </Space>
  </DemoBlock>

  <DemoBlock title="horizontal aligin">
    <Space :size="size" align="start">
      <span>test</span>
      <Button>button</Button>
      <Input />
      <div>
        123
      </div>
    </Space>
  </DemoBlock>

  <DemoBlock title="wrap">
    <div class="w-600px">
      <Space :size="[8, 16]" wrap>
        <Button v-for="item in 20" :key="item">
          button
        </Button>
      </Space>
    </div>
  </DemoBlock>
</template>

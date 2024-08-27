<script setup lang="ts">
  import type { LtComponentSize } from '@lite-ui/ui'

  import { Tag } from '@lite-ui/ui'
  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
</script>

<template>
  <Tag>
    sizeNum
  </Tag>

  <DemoBlock title="bordered">
    <Tag> Docs</Tag>
    <Tag :bordered="false">
      Docs
    </Tag>
  </DemoBlock>

  <DemoBlock title="icon">
    <Tag close-icon>
      Docs
    </Tag>
    <Tag close-icon :bordered="false">
      Docs
    </Tag>

    <br>
    <br>

    <Tag close-icon="i-carbon:arrow-up-right">
      Docs
    </Tag>
    <Tag close-icon="i-carbon:arrow-up-right" :bordered="false">
      Docs
    </Tag>

    <br>
    <br>

    <Tag>
      Docs
      <template #closeIcon>
        <span i-carbon:dew-point>Docs</span>
      </template>
    </Tag>
    <Tag close-icon="i-carbon:arrow-up-right" :bordered="false">
      Docs
      <template #closeIcon>
        <span i-carbon:dew-point>Docs</span>
      </template>
    </Tag>

    <br>
    <br>

    <Tag>
      Docs
      <template #icon>
        <span i-carbon:flash>Docs</span>
      </template>
    </Tag>
    <Tag :bordered="false">
      Docs
      <template #icon>
        <span i-carbon:flash>Docs</span>
      </template>
      <template #closeIcon>
        <span i-carbon:dew-point>Docs</span>
      </template>
    </Tag>
  </DemoBlock>
</template>

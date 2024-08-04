<script setup lang="ts">
  import { Button } from '@lite-ui/ui'
  import DemoBlock from './DemoBlock.vue'
</script>

<template>
  <DemoBlock title="Type">
    <Button>
      button
    </Button>
    <Button type="text">
      button text
    </Button>
    <Button type="primary">
      button primary
    </Button>
    <Button type="link">
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Disabled">
    <Button disabled>
      button
    </Button>
    <Button type="text" disabled>
      button text
    </Button>
    <Button type="primary" disabled>
      button primary
    </Button>
    <Button type="link" disabled>
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Danger">
    <Button danger>
      button
    </Button>
    <Button type="text" danger>
      button text
    </Button>
    <Button type="primary" danger>
      button primary
    </Button>
    <Button type="link" danger>
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Block" cls="flex-col">
    <Button danger>
      button
    </Button>
    <Button type="text" block danger>
      button text
    </Button>
    <Button type="primary" block danger>
      button primary
    </Button>
    <Button type="link" block danger>
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Icon">
    <Button icon="i-carbon:search">
      button
    </Button>
    <Button type="text" icon="i-carbon:search">
      button text
    </Button>
    <Button
      type="primary"
      icon="i-carbon:email"
      danger
      icon-position="end"
    >
      button primary
    </Button>
    <Button type="link" icon="i-carbon:search" danger>
      button link
    </Button>
    <Button type="primary" icon="i-carbon:search" danger />
    <Button
      type="primary"
      icon="i-carbon:search"
      danger
      circle
    />
  </DemoBlock>

  <DemoBlock title="Two-cn-chars">
    <Button auto-insert-space>
      取消
    </Button>

    <Button
      type="primary"
      auto-insert-space
    >
      确认
    </Button>
    <Button
      type="primary"
    >
      确认了吗?
    </Button>
    <Button
      type="primary"
    >
      <div>
        <span>span</span>
        <span>test</span>
      </div>
    </Button>
  </DemoBlock>

  <DemoBlock title="Slots">
    <Button>
      default slot
    </Button>

    <Button
      type="primary"
    >
      <template #icon>
        <span i-carbon:3d-cursor />
      </template>
      icon slot
    </Button>
  </DemoBlock>
</template>

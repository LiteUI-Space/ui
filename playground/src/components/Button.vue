<script setup lang="ts">
  import type { ButtonProps } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Button } from '@lite-ui/ui'

  import DemoBlock from './DemoBlock.vue'

  const sizeList: ButtonProps['size'][] = ['small', 'default', 'large']
  const size = ref(sizeList[1])
</script>

<template>
  <div flex="~">
    <Button
      v-for="item in sizeList"
      :key="item"
      size="small"
      @click="size = item"
    >
      {{ item }}
    </Button>
  </div>
  <DemoBlock title="test">
    <div h-50>
      <Button
        :size="size"
        icon="i-carbon:3d-software"
      />
      <Button
        :size="size"
        icon="i-carbon:logo-github"
      />
      <Button :size="size" icon="i-carbon:search">
        搜索
      </Button>
      <Button :size="size">
        Get Started
      </Button>
      <Button :size="size" icon="i-carbon:search">
        button
      </Button>
      <Button :size="size" type="text">
        button text
      </Button>
      <Button :size="size" type="primary">
        button primary
      </Button>
      <Button :size="size" type="link">
        button link
      </Button>
    </div>
  </DemoBlock>

  <DemoBlock title="Type">
    <Button :size="size">
      button
    </Button>
    <Button :size="size" type="text">
      button text
    </Button>
    <Button :size="size" type="primary">
      button primary
    </Button>
    <Button :size="size" type="link">
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Disabled">
    <Button :size="size" disabled>
      button
    </Button>
    <Button :size="size" type="text" disabled>
      button text
    </Button>
    <Button :size="size" type="primary" disabled>
      button primary
    </Button>
    <Button :size="size" type="link" disabled>
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Danger">
    <Button :size="size" danger>
      button
    </Button>
    <Button :size="size" type="text" danger>
      button text
    </Button>
    <Button :size="size" type="primary" danger>
      button primary
    </Button>
    <Button :size="size" type="link" danger>
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Block" cls="flex-col">
    <Button :size="size" danger block>
      button
    </Button>
    <Button
      :size="size"
      type="text"
      block
      danger
    >
      button text
    </Button>
    <Button
      :size="size"
      type="primary"
      block
      danger
    >
      button primary
    </Button>
    <Button
      :size="size"
      type="link"
      block
      danger
    >
      button link
    </Button>
  </DemoBlock>

  <DemoBlock title="Icon">
    <Button :size="size" icon="i-carbon:search">
      button
    </Button>
    <Button :size="size" type="text" icon="i-carbon:search">
      button text
    </Button>
    <Button
      :size="size"
      type="primary"
      icon="i-carbon:email"
      danger
      icon-position="end"
    >
      button primary
    </Button>
    <Button
      :size="size"
      type="link"
      icon="i-carbon:search"
      danger
    >
      button link
    </Button>
    <Button
      :size="size"
      type="primary"
      icon="i-carbon:search "
      danger
    />
    <Button
      :size="size"
      type="primary"
      icon="i-carbon:search "
      danger
      circle
    />
    <Button
      :size="size"
      icon="i-carbon:logo-github "
      circle
    />
    <Button
      :size="size"
      icon="i-carbon:logo-github "
    />
  </DemoBlock>

  <DemoBlock title="Two-cn-chars">
    <Button :size="size" auto-insert-space>
      取消
    </Button>

    <Button
      :size="size"
      type="primary"
      auto-insert-space
    >
      确认
    </Button>
    <Button
      :size="size"
      type="primary"
    >
      确认了吗?
    </Button>
    <Button
      :size="size"
      type="primary"
    >
      <div>
        <span>span</span>
        <span>test</span>
      </div>
    </Button>
  </DemoBlock>

  <DemoBlock title="Slots">
    <Button :size="size">
      default slot
    </Button>

    <Button
      :size="size"
      type="primary"
    >
      <template #icon>
        <span i-carbon:3d-cursor />
      </template>
      icon slot
    </Button>
  </DemoBlock>
</template>

<script setup lang="ts">
  import { Button } from '@lite-ui/button'
</script>

<template>
  <div>
    <h1 ml-60>
      Type
    </h1>
    <div flex="~ gap-2 justify-center">
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
    </div>
  </div>
  <div>
    <h1 ml-60>
      Disabled
    </h1>
    <div flex="~ gap-2 justify-center">
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
    </div>
  </div>
  <div>
    <h1 ml-60>
      Danger
    </h1>
    <div flex="~ gap-2 justify-center">
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
    </div>
  </div>
  <div>
    <h1 ml-60>
      Block
    </h1>
    <div flex="~ gap-2 col justify-center">
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
    </div>
  </div>

  <div>
    <h1 ml-60>
      Icon
    </h1>
    <div flex="~ gap-2 justify-center">
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
    </div>
  </div>

  <div>
    <h1 ml-60>
      Two-chinese-chars
    </h1>
    <div flex="~ gap-2 justify-center">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

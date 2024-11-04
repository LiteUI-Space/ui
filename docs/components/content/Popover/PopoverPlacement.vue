<script setup lang="ts">
  import { Button, Popover, Space } from '@lite-space/ui'

  const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ placement, text }">
    <Popover :placement="placement" title="测试Title">
      <Button class="w-18">
        {{ text }}
      </Button>
      <template #content>
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      </template>
    </Popover>
  </DefineTemplate>
  <div class="flex-center">
    <div px-6>
      <div ml-20>
        <Space>
          <ReuseTemplate placement="top-start" text="TL" />
          <ReuseTemplate placement="top" text="Top" />
          <ReuseTemplate placement="top-end" text="TR" />
        </Space>
      </div>
      <div flex="~ items-center">
        <div>
          <Space direction="vertical">
            <ReuseTemplate placement="left-start" text="LT" />
            <ReuseTemplate placement="left" text="Left" />
            <ReuseTemplate placement="left-end" text="LB" />
          </Space>
        </div>
        <div ml-62>
          <Space direction="vertical">
            <ReuseTemplate placement="right-start" text="RT" />
            <ReuseTemplate placement="right" text="Right" />
            <ReuseTemplate placement="right-end" text="RB" />
          </Space>
        </div>
      </div>
      <div ml-20>
        <Space>
          <ReuseTemplate placement="bottom-start" text="BL" />
          <ReuseTemplate placement="bottom" text="Bottom" />
          <ReuseTemplate placement="bottom-end" text="BR" />
        </Space>
      </div>
    </div>
  </div>
</template>

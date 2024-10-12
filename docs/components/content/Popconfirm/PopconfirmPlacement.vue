<script setup lang="ts">
  import { Button, Popconfirm, Space } from '@lite-space/ui'

  const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ placement, text }">
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      ok-text="Yes"
      cancel-text="No"
      :placement="placement"
    >
      <Button class="w-18">
        {{ text }}
      </Button>
    </Popconfirm>
  </DefineTemplate>
  <div px-6>
    <div ml-20>
      <Space>
        <ReuseTemplate placement="top-start" text="TL" />
        <ReuseTemplate placement="top" text="Top" />
        <ReuseTemplate placement="top-end" text="TR" />
      </Space>
    </div>
    <div flex="~ items-center justify-between">
      <div>
        <Space direction="vertical">
          <ReuseTemplate placement="left-start" text="LT" />
          <ReuseTemplate placement="left" text="Left" />
          <ReuseTemplate placement="left-end" text="LB" />
        </Space>
      </div>
      <div>
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
</template>

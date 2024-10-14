<script setup lang="ts">
  import { Button, Popconfirm, Space } from '@lite-space/ui'
</script>

<template>
  <Space>
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      ok-text="Yes"
      cancel-text="No"
    >
      <Button danger>
        Delete
      </Button>
    </Popconfirm>

    <Popconfirm
      disabled
      title="Delete the task"
      description="Are you sure to delete this task?"
      ok-text="Yes"
      cancel-text="No"
    >
      <Button danger>
        Disabled
      </Button>
    </Popconfirm>
  </Space>
</template>

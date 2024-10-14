<script setup lang="ts">
  import { Button, Popconfirm } from '@lite-space/ui'
</script>

<template>
  <Popconfirm
    icon="i-carbon:accessibility"
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    <Button danger>
      Delete
    </Button>
  </Popconfirm>
</template>

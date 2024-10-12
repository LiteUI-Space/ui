<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Popconfirm } from '@lite-space/ui'

  import Icon from './components/Icon.vue'
  import SizeBtns from './components/SizeBtns.vue'

  const size = ref('default')
  watch(size, val => {
    console.log('size', val)
  })
</script>

<template>
  <SizeBtns v-model="size" />
  <Icon />
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    Delete
  </Popconfirm>

  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes1"
    cancel-text="No2"
  >
    Delete
    <template #title>
      Delete the task1
    </template>
    <template #description>
      Are you sure to delete this task?111
    </template>
  </Popconfirm>
</template>

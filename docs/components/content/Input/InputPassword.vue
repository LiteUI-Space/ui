<script setup lang="ts">
  import { Button, InputPassword } from '@lite-space/ui'

  const visible = ref(true)
  function handleChange(data: boolean) {
    console.log('data', data)
  }
</script>

<template>
  <InputPassword
    v-model:visible="visible"
    @change="handleChange"
  >
    <template #suffix>
      <span>123</span>
    </template>
  </InputPassword>
  <Button type="primary" @click="visible = !visible">
    {{ visible }}
  </Button>
</template>

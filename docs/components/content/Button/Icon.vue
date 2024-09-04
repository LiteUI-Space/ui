<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button icon="i-carbon:search">
    Button
  </Button>
  <Button type="text" icon="i-carbon:search">
    Text Button
  </Button>
  <Button
    type="primary"
    icon="i-carbon:email"
    danger
    icon-position="end"
  >
    Primary Button
  </Button>
  <Button
    type="link"
    icon="i-carbon:search"
    danger
  >
    button link
  </Button>
  <Button
    type="primary"
    icon="i-carbon:search "
    danger
  />
  <Button
    type="primary"
    icon="i-carbon:search "
    danger
    circle
  />
  <Button icon="i-carbon:logo-github" circle />
  <Button icon="i-carbon:logo-github" />
  <Button
    type="primary"
  >
    <template #icon>
      <span i-carbon:3d-cursor />
    </template>
    icon slot
  </Button>
</template>

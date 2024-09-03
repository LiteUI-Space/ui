<script setup lang="ts">
  import { Tag } from '@lite-ui/ui'
</script>

<template>
  <Tag>tag</Tag>
  <Tag close-icon>
    Docs
  </Tag>
  <Tag icon="i-carbon:bicycle">
    Icon
  </Tag>
  <Tag :bordered="false">
    tag
  </Tag>
</template>

<script setup lang="ts">
  import Tag from './components/Tag.vue'
  import SizeBtns from './components/SizeBtns.vue'

  import { ref, watch } from 'vue'

  const size = ref('default')
  watch(size, val => {
    console.log('size', val)
  })
</script>

<template>
  <SizeBtns v-model="size" />
  <!-- <Input /> -->
  <!-- <Drivide /> -->
  <!-- <Space :size="size" /> -->
  <!-- <Radio /> -->
  <!-- <Checkbox /> -->
  <Tag />
</template>

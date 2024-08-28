<script setup lang="ts">
  import SizeBtns from './components/SizeBtns.vue'
  import Breadcrumb from './components/Breadcrumb.vue'

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
  <!-- <Tag /> -->
  <Breadcrumb />
</template>

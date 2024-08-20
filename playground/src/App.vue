<script setup lang="ts">
  import Checkbox from './components/Checkbox.vue'
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
  <!-- <Button /> -->
  <!-- <Switch /> -->
  <!-- <Drivide /> -->
  <!-- <Space :size="size" /> -->
  <Checkbox />
</template>

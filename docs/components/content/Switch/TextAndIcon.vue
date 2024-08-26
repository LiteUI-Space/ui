<script setup lang="ts">
  import { Switch } from '@lite-ui/ui'

  const value1 = ref(true)
  const value2 = ref(true)
</script>

<template>
  <Switch v-model="value1" checked-children="i-carbon:accessibility" un-checked-children="i-carbon:accessibility-alt" />
  <Switch v-model="value2" checked-children="开" un-checked-children="关" />
  <Switch>
    <template #checkedChildren>
      <span>开</span>
    </template>
    <template #unCheckedChildren>
      <span>关</span>
    </template>
  </Switch>
</template>

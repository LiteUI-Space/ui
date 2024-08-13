<script setup lang="ts">
  import { ref } from 'vue'
  import { Switch } from '@lite-ui/ui'

  import DemoBlock from './DemoBlock.vue'

  const value = ref(true)
</script>

<template>
  <Switch v-model="value" />

  <DemoBlock title="CheckedChildren & UnCheckedChildren">
    <Switch checked-children="i-carbon:accessibility" un-checked-children="i-carbon:accessibility-alt" />
    <Switch checked-children="开" un-checked-children="关" />
    <Switch>
      <template #checkedChildren>
        <span>开</span>
      </template>
      <template #unCheckedChildren>
        <span>关</span>
      </template>
    </Switch>
  </DemoBlock>

  <DemoBlock title="Disabled">
    <Switch disabled checked-children="i-carbon:accessibility" un-checked-children="i-carbon:accessibility-alt" />
    <Switch disabled checked-children="开" un-checked-children="关" />
    <Switch disabled>
      <template #checkedChildren>
        <span>开</span>
      </template>
      <template #unCheckedChildren>
        <span>关</span>
      </template>
    </Switch>
  </DemoBlock>
</template>

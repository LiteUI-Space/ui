<script setup lang="ts">
  import { TabPane, Tabs } from '@lite-space/ui'
</script>

<template>
  <Tabs>
    <TabPane key="1" name="tab1">
      Tab1 content
    </TabPane>
    <TabPane key="2" disabled name="tab2">
      Tab2 content
    </TabPane>
    <TabPane key="3" name="Tab3">
      Tab3 content
    </TabPane>
  </Tabs>
</template>

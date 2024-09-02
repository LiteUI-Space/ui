<script setup lang="ts">
  import type { LtComponentSize } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Button, TabPane, Tabs } from '@lite-ui/ui'

  import Tab1 from './demo/Tab1.vue'
  import Tab2 from './demo/Tab2.vue'
  import Tab3 from './demo/Tab3.vue'

  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
  const testDisabled = ref(false)
</script>

<template>
  <Button @click="testDisabled = !testDisabled">
    test Disabled: {{ testDisabled }}
  </Button>
  <Tabs>
    <TabPane key="1" name="tab1">
      tab1
    </TabPane>
    <TabPane key="2" name="tab2">
      tab2
    </TabPane>
    <TabPane key="3" name="统计">
      统计
    </TabPane>
  </Tabs>

  <DemoBlock title="slot name">
    <Tabs>
      <TabPane key="1" name="tab11">
        <span>123</span>
        <template #name>
          <span i-carbon:logo-vue inline-block text-xs />
          <span>tab122</span>
        </template>
      </TabPane>
      <TabPane key="2" name="Code">
        tab2
      </TabPane>
      <TabPane key="3" name="统计">
        tab3
      </TabPane>
    </Tabs>
  </DemoBlock>

  <DemoBlock title="disabled">
    <Tabs>
      <TabPane key="1">
        <span>123</span>
        <template #name>
          <span i-carbon:logo-vue inline-block text-xs />
          <span>tab122</span>
        </template>
      </TabPane>
      <TabPane key="2" :disabled="testDisabled" name="Code">
        tab2
      </TabPane>
      <TabPane key="3" name="统计">
        tab3
      </TabPane>
    </Tabs>
  </DemoBlock>

  <DemoBlock title="align">
    <Tabs>
      <TabPane key="1" name="tab1">
        tabv1
      </TabPane>
      <TabPane key="2" name="Code">
        tab2
      </TabPane>
      <TabPane key="3" name="统计">
        tab3
      </TabPane>
    </Tabs>
    <Tabs align="center">
      <TabPane key="1" name="tab1">
        tabv1
      </TabPane>
      <TabPane key="2" name="Code">
        tab2
      </TabPane>
      <TabPane key="3" name="统计">
        tab3
      </TabPane>
    </Tabs>

    <Tabs align="right">
      <TabPane key="1" name="tab1">
        tabv1
      </TabPane>
      <TabPane key="2" name="Code">
        tab2
      </TabPane>
      <TabPane key="3" name="统计">
        tab3
      </TabPane>
    </Tabs>
  </DemoBlock>

  <DemoBlock title="lazy">
    <Tabs lazy>
      <TabPane key="1" name="tab1">
        <Tab1 />
      </TabPane>
      <TabPane key="2" name="Code">
        <Tab2 />
      </TabPane>
      <TabPane key="3" name="统计">
        <Tab3 />
      </TabPane>
    </Tabs>
  </DemoBlock>
</template>

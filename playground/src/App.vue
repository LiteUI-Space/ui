<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Affix, Button, Select, SelectOption } from '@lite-space/ui'

  import Icon from './components/Icon.vue'
  import SizeBtns from './components/SizeBtns.vue'

  const size = ref('default')
  watch(size, val => {
    console.log('size', val)
  })
  const selectValue = ref('test2')
  const selectValue1 = ref('test2')
</script>

<template>
  <SizeBtns v-model="size" />
  <Icon />
  <Select v-model="selectValue" placeholder="请选择">
    <SelectOption v-for="item in ['test1', 'test2', 'tests3', 'test4', 'test5', 'test6', 'test7']" :key="item" :value="item">
      {{ item }}
    </SelectOption>
  </Select>

  <Select v-model="selectValue1" placeholder="请选择">
    <SelectOption value="test1">
      test1
    </SelectOption>
    <SelectOption value="test2">
      <template #title>
        "test2111111111
      </template>
      <SelectOption value="test4">
        test4
      </SelectOption>
      <SelectOption value="test5">
        test5
      </SelectOption>
    </SelectOption>
    <SelectOption value="test3">
      test3
    </SelectOption>
  </Select>
  <div ref="div" class="w-50 h-50 bg-gray-200 overflow-hidden overflow-y-auto">
    <Affix :offset-top="10">
      <Button>Affix top</Button>
    </Affix>
    <div h-100 bg-green />
  </div>
</template>

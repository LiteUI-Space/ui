<script setup lang="ts">
  import type { FunctionalComponent } from 'vue'
  import type { SlotRenderProps, TabItem, TabsProps } from './types'

  import { TabsKey } from './constants'
  import {
    Fragment,
    computed,
    h,
    nextTick,
    onMounted,
    provide,
    reactive
  } from 'vue'

  defineOptions({
    name: 'LtTabs'
  })

  defineProps<TabsProps>()
  const emit = defineEmits<{
    change: [val: string | number]
  }>()

  const slot = defineSlots()

  const modelValue = defineModel<string | number>({ default: '' })
  const tabsItems = reactive(new Map<string, TabItem>())

  onMounted(async () => {
    await nextTick()
    modelValue.value = slot.default()[0].key
  })

  function handleClick(item: TabItem) {
    if (item.disabled)
      return
    modelValue.value = item.key
    emit('change', item.key)
  }

  const SlotRender: FunctionalComponent<SlotRenderProps> = (props: SlotRenderProps) => {
    return h(Fragment, null, [props.item.name || props.item.slot?.()])
  }

  function update(data: TabItem) {
    tabsItems.set(data.key, data)
  }

  provide(TabsKey, {
    model: computed(() => modelValue.value),
    update
  })
</script>

<template>
  <div>
    <div v-if="tabsItems.size" class="mb-4 relative flex w-full cursor-pointer border-b border-b-solid border-b-gray-200">
      <div
        v-for="[, item] in tabsItems"
        :key="item.key"
        class="pb-2 px-4 text-gray-600"
        :class="{
          'border-b-2 border-b-gray-800 border-b-solid': modelValue === item.key && !item.disabled,
          'op-60! cursor-not-allowed!': item?.disabled,
        }"
        @click="handleClick(item)"
      >
        <div class="flex-center text-sm  text-gray-500" :class="{ 'text-gray-900': modelValue === item.key }">
          <SlotRender :item="item" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

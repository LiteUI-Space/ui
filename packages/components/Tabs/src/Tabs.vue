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

  const props = withDefaults(defineProps<TabsProps>(), {
    align: 'left'
  })

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
    lazy: computed(() => props.lazy),
    update
  })
</script>

<template>
  <div>
    <div v-if="tabsItems.size" class="lt-tabs" :class="`lt-tabs-item--${align}`">
      <div
        v-for="[, item] in tabsItems"
        :key="item.key"
        class="lt-tabs-item"
        :class="{
          'lt-tabs-item--active': modelValue === item.key && !item.disabled,
          'lt-tabs-item--disabled': item?.disabled,
        }"
        @click="handleClick(item)"
      >
        <div
          class="lt-tabs-item-text"
          :class="{
            'lt-tabs-item-text--active': modelValue === item.key,
          }"
        >
          <SlotRender :item="item" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

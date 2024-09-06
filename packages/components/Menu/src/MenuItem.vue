<script setup lang="ts">
  import type { MenuItemProps } from './types'

  import { computed, inject, ref } from 'vue'
  import { isUnoIcon } from '@lite-space/utils'

  import { menuKey } from './constants'

  defineOptions({
    name: 'LtMenuItem'
  })
  const props = defineProps<MenuItemProps>()

  const slot = defineSlots<{
    default: () => any
    title: () => any
    icon: () => any
  }>()

  const menu = inject(menuKey, undefined)
  const isChecked = computed(() => menu?.model.value === props.value)
  const isIcon = computed(() => isUnoIcon(props.icon))
  const cls = computed(() => {
    const isTitle = props.title || slot.title
    return [
      {
        'bg-gray-100!': isChecked.value && !isTitle
      },
      isTitle ? 'lt-subMenuItem' : 'lt-menuItem-other'
    ]
  })

  const isOpen = ref(props.open || menu?.open.value)
  const subMenuItemRef = ref<HTMLUListElement>()

  function handleChange() {
    if (!props.title) {
      menu?.onChange(props.value)
    }
  }
  function handleOpen() {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <li
    class="lt-menuItem"
    :class="cls"
    @click.stop="handleChange"
  >
    <template v-if="$slots.title || title">
      <div class="lt-subMenuItem-title" @click.stop="handleOpen">
        <div class="flex items-center w-full">
          <template v-if="isIcon || $slots.icon">
            <span v-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
            <span v-else class="lt-subMenuItem-title-icon" :class="icon" />
          </template>
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <span
          i-carbon:chevron-down
          class="w-5 h-5 transition"
          :class="{
            '-rotate-z-90': !isOpen,
          }"
        />
      </div>
      <ul v-if="isOpen" ref="subMenuItemRef" class="p-0 w-full">
        <slot />
      </ul>
    </template>
    <template v-else>
      <template v-if="isIcon || $slots.icon">
        <span v-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />
        <span v-else class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
      </template>
      <slot />
    </template>
  </li>
</template>

<script setup lang="ts">
  import type { MenuItemProps } from './types'

  import { computed, inject, ref } from 'vue'
  import { isUnoIcon } from '@lite-space/utils'
  import { IconArrowDown } from '@lite-space/icon'

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
  const isTitle = computed(() => props.title || slot.title)
  const isOpen = ref(props.open || menu?.open.value)

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
    :class="[
      {
        'lt-menuItem--active': isChecked && !isTitle,
      },
      isTitle ? 'lt-subMenuItem' : 'lt-menuItem-other',
    ]"
    @click.stop="handleChange"
  >
    <template v-if="isTitle">
      <div class="lt-subMenuItem-title" @click.stop="handleOpen">
        <div class="flex items-center w-full">
          <span v-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
          <span v-else-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />

          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <div class="flex-center">
          <IconArrowDown
            class="w-5 h-5 text-gray-400 transition"
            :class="{
              '-rotate-z-90': !isOpen,
            }"
          />
        </div>
      </div>
      <ul v-if="isOpen" class="p-0 w-full">
        <slot />
      </ul>
    </template>
    <template v-else>
      <span v-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />
      <span v-else-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
      <slot />
    </template>
  </li>
</template>

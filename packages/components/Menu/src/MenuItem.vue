<script setup lang="ts">
  import type { MenuBasicValue, MenuItemProps } from './types'

  import { computed, inject, ref } from 'vue'
  import { isUnoIcon } from '@lite-space/utils'
  import { Dropdown } from '@lite-space/dropdown'

  import { menuKey } from './constants'

  defineOptions({
    name: 'LtMenuItem'
  })

  const props = defineProps<MenuItemProps>()

  const slot = defineSlots<{
    default: () => any
    title: () => any
    icon: () => any
    suffix: () => any
  }>()

  const menu = inject(menuKey, undefined)
  const isChecked = computed(() => menu?.model.value === props.value)
  const isIcon = computed(() => isUnoIcon(props.icon))
  const isTitle = computed(() => props.title || slot.title)
  const isOpen = ref(props.open || menu?.props?.open)

  function handleChange() {
    if (!props.title && !props.disabled) {
      menu?.onChange(props.value || '')
    }
  }
  function handleOpen() {
    if (props.disabled)
      return
    isOpen.value = !isOpen.value
  }

  function handleDropdownChange(val: MenuBasicValue) {
    menu?.onChange(val)
  }
</script>

<template>
  <li
    class="lt-menuItem"
    :class="[
      {
        'lt-menuItem--active': isChecked && !isTitle,
        'lt-menuItem--disabled': disabled,
        'lt-menuItem--hover': !disabled && (!isTitle || popper),
      },
      isTitle ? 'lt-subMenuItem' : 'lt-menuItem-other',
    ]"
    @click.stop="handleChange"
  >
    <template v-if="isTitle">
      <Dropdown
        v-if="popper"
        class="w-full"
        :offset="offset || menu?.props?.offset"
        :disabled="disabled"
        placement="right-start"
        @change="handleDropdownChange"
      >
        <div
          class="lt-subMenuItem-title gap-1"
          :class="[disabled ? 'lt-menuItem--disabled' : 'lt-menuItem--hover']"
          @click.stop="handleOpen"
        >
          <div class="flex items-center w-full">
            <span v-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
            <span v-else-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />
            <slot name="title">
              {{ title }}
            </slot>
          </div>

          <div class="flex-center">
            <slot name="suffix">
              <span
                i-heroicons:chevron-down-solid
                class="text-sm text-gray-400 -rotate-z-90"
              />
            </slot>
          </div>
        </div>
        <template #content>
          <ul class="p-0 w-full">
            <slot />
          </ul>
        </template>
      </Dropdown>

      <template v-else>
        <div
          class="lt-subMenuItem-title gap-1"
          :class="{
            'lt-menuItem--disabled': disabled,
          }"
          @click.stop="handleOpen"
        >
          <div class="flex items-center w-full">
            <span v-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
            <span v-else-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />

            <slot name="title">
              {{ title }}
            </slot>
          </div>

          <div class="flex-center">
            <slot name="suffix">
              <span
                i-heroicons:chevron-down-solid
                class="text-sm text-gray-400"
                :class="{
                  '-rotate-z-90': popper || !isOpen,
                }"
              />
            </slot>
          </div>
        </div>
        <ul v-if="isOpen" class="p-0 w-full">
          <slot />
        </ul>
      </template>
    </template>
    <template v-else>
      <span v-if="isIcon" class="lt-subMenuItem-title-icon" :class="icon" />
      <span v-else-if="$slots.icon" class="lt-subMenuItem-title-icon"><slot name="icon" /></span>
      <slot />
    </template>
  </li>
</template>

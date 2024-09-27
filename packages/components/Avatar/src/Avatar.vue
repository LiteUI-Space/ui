<script setup lang="ts">
  import type { CSSProperties } from 'vue'
  import type { AvatarProps } from './types'

  import { IconUser } from '@lite-space/icon'
  import { useResizeObserver } from '@vueuse/core'
  import { computed, inject, ref, useTemplateRef } from 'vue'

  import { avatarGroupKey } from './constants'

  defineOptions({
    name: 'LtAvatar'
  })

  const { shape = 'circle', size = 'default' } = defineProps<AvatarProps>()

  const avatarGroup = inject(avatarGroupKey, undefined)
  const avatarRef = useTemplateRef('avatarRef')
  const slotDefaultRef = useTemplateRef('slotDefaultRef')

  const slotDefaultStyle = ref<CSSProperties>()

  /**
   * Resize the slot content to fit the avatar
   * @see https://github.com/layui-vue/layui-vue/blob/master/packages/component/component/avatar/index.vue#L57-L65
   */
  useResizeObserver(slotDefaultRef, entries => {
    const entry = entries[0]
    if (entry.contentBoxSize) {
      const avatarWidth = avatarRef.value!.offsetWidth
      const { inlineSize } = entry.contentBoxSize[0]
      const ratio = Math.min((avatarWidth / inlineSize) * 0.7, 1)
      slotDefaultStyle.value = { transform: `scale(${ratio})` }
    }
  })
  const customSizeStyle = computed(() => {
    if (size && typeof size === 'number') {
      return {
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size}px`
      } as CSSProperties
    }
    return null
  })
</script>

<template>
  <span
    ref="avatarRef"
    class="lt-avatar"
    :class="[
      {
        'rounded-md!': avatarGroup?.shape === 'square' || shape === 'square',
      },
      `lt-avatar-${avatarGroup?.size || size}`,
    ]"
    :style="customSizeStyle"
  >
    <span
      v-if="$slots.default"
      ref="slotDefaultRef"
      class="flex-center"
      :style="[slotDefaultStyle, { fontSize: customSizeStyle?.fontSize }]"
    >
      <slot />
    </span>
    <img
      v-else-if="src"
      :src="src"
      class="lt-avatar-img"
      :alt="alt"
    >
    <span
      v-else-if="icon"
      class="lt-avatar-icon"
      :class="icon"
      :style="{ fontSize: customSizeStyle?.fontSize }"
    />
    <IconUser v-else class="lt-avatar-icon" :style="{ fontSize: customSizeStyle?.fontSize }" />
  </span>
</template>

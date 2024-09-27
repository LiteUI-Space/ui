<script setup lang="ts">
  import type { AvatarGroupProps } from './types'

  import { provide } from 'vue'
  import { avatarGroupKey } from './constants'

  defineOptions({
    name: 'LtAvatarGroup'
  })

  const props = defineProps<AvatarGroupProps>()

  provide(avatarGroupKey, props)
</script>

<template>
  <div class="lt-avatar-group">
    <slot />
  </div>
</template>

<style scoped>
.lt-avatar-group > * + * {
  margin-left: -8px;
  box-shadow: 0 0 0 1px #fff;
}
</style>

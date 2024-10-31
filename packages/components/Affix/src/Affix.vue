<script setup lang="ts">
  import type { AffixProps } from './types'

  defineOptions({
    name: 'LtAffix'
  })

  withDefaults(defineProps<AffixProps>(), {
    offsetTop: 0,
    zIndex: 99
  })
</script>

<template>
  <div class="lt-affix" :style="{ top: `${offsetTop}px`, zIndex }">
    <slot />
  </div>
</template>

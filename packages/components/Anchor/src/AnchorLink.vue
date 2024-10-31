<script setup lang="ts">
  import type { AnchorLinkProps } from './types'

  import { inject } from 'vue'
  import { anchorKey } from './constants'

  defineOptions({
    name: 'LtAnchorLink'
  })

  defineProps<AnchorLinkProps>()
  const anchor = inject(anchorKey, undefined)
</script>

<template>
  <template v-if="title">
    <LtAnchorLink :href="href">
      <slot name="title">
        {{ title }}
      </slot>
    </LtAnchorLink>
    <div class="lt-anchor-sub-link">
      <slot />
    </div>
  </template>
  <div v-else>
    <a
      class="lt-anchor-link"
      :class="{ 'lt-anchor-link--active': anchor?.model.value === href }"
      :href="`#${href}`"
      @click="anchor?.onChange(href || '')"
    >
      <slot />
    </a>
  </div>
</template>

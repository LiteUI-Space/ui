<script setup lang="ts">
  import type { CardProps } from './types'

  defineOptions({
    name: 'LtCard'
  })

  defineProps<CardProps>()
</script>

<template>
  <div class="lt-card">
    <div v-if="$slots.header || title || $slots.extra || $slots.title" class="lt-card-header">
      <slot v-if="$slots.header" name="header" />
      <template v-else>
        <div class="lt-card-header-title">
          <slot v-if="$slots.title" name="title" />
          <template v-else>
            {{ title }}
          </template>
        </div>
        <div class="lt-card-extra">
          <slot name="extra" />
        </div>
      </template>
    </div>
    <div v-if="$slots.default" class="lt-card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="lt-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

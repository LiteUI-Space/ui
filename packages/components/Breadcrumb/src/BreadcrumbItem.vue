<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { isUnoIcon } from '@lite-space/utils'

  import { breadcrumbKey } from './constants'

  defineOptions({
    name: 'LtBreadcrumbItem'
  })

  const breadcrumb = inject(breadcrumbKey, undefined)
  const isIcon = computed(() => isUnoIcon(breadcrumb?.separator))
</script>

<template>
  <li><slot /></li>
  <li v-if="isIcon" class="lt-breadcrumbItem-separator" :class="[isIcon && breadcrumb?.separator]" />
  <li v-else class="lt-breadcrumbItem-separator">
    {{ breadcrumb?.separator }}
  </li>
</template>

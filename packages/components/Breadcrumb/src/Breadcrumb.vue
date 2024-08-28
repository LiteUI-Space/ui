<script setup lang="ts">
  import type { BreadcrumbProps } from './types'

  import { provide } from 'vue'
  import { breadcrumbKey } from './constants'
  import BreadcrumbItem from './BreadcrumbItem.vue'

  defineOptions({
    name: 'LtBreadcrumb'
  })

  const props = withDefaults(defineProps<BreadcrumbProps>(), {
    separator: '/'
  })

  provide(breadcrumbKey, props)
</script>

<template>
  <nav>
    <ol class="lt-breadcrumb">
      <slot>
        <BreadcrumbItem v-for="(item, index) in items" :key="index">
          {{ item }}
        </BreadcrumbItem>
      </slot>
    </ol>
  </nav>
</template>

<script setup lang="ts">
  import { Breadcrumb } from '@lite-space/ui'

  const route = useRoute()
  const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <div flex="~" class="gap-10">
    <template v-if="page?.title">
      <aside class="sticky top-14 z-1">
        aside
      </aside>
      <main class="relative">
        <Breadcrumb />
        <span>Docs > {{ page.title }}</span>
        <ContentRenderer :value="page" />
      </main>
    </template>
    <div v-else>
      error {{ error }}
    </div>
  </div>
</template>

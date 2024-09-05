<script setup lang="ts">
  import { Breadcrumb } from '@lite-space/ui'

  const route = useRoute()
  const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <div flex="~" class="gap-10">
    <template v-if="page?.title">
      <aside class="sticky top-14 z-1">
        <div v-for="item in navigation" :key="item._path">
          <div v-for="it in item.children" :key="it._path">
            <h3 class="text-sm font-bold mb-3">
              {{ it.title }}
            </h3>
            <div class="grid gap-1">
              <div v-for="t in it.children" :key="t._path" class="text-sm text-gray-600">
                <NuxtLink :to="t._path" class="hover:text-gray-800">
                  {{ t.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main class="relative">
        <Breadcrumb class="" :items="['Docs', page.title]" separator="i-carbon:chevron-right" />
        <ContentRenderer :value="page" />
      </main>
    </template>
    <div v-else>
      error {{ error }}
    </div>
  </div>
</template>

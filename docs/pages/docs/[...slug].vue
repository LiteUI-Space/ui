<script setup lang="ts">
  import { Breadcrumb, Menu, MenuItem } from '@lite-space/ui'

  const route = useRoute()
  const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
  const url = useRequestURL()
</script>

<template>
  <div flex="~" class="gap-10">
    <template v-if="page?.title">
      <aside class="sticky top-14 z-1">
        <template v-for="item in navigation" :key="item._path">
          <Menu :model-value="url.pathname" open>
            <MenuItem v-for="it in item.children" :key="it._path" :value="it._path">
              <template #title>
                <h3 class="text-sm font-bold">
                  {{ it.title }}
                </h3>
              </template>
              <MenuItem
                v-for="t in it.children"
                :key="t._path"
                :value="t._path"
              >
                <NuxtLink
                  :to="t._path"
                  class="w-full hover:text-gray-800 text-sm text-gray-600"
                >
                  {{ t.title }}
                </NuxtLink>
              </MenuItem>
            </MenuItem>
          </Menu>
        </template>
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

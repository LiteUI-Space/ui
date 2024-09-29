<script setup lang="ts">
  import { Breadcrumb, Menu, MenuItem } from '@lite-space/ui'

  const route = useRoute()
  const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
  const url = useRequestURL()
</script>

<template>
  <div flex="~" class="gap-10">
    <template v-if="page?.title">
      <aside class="sticky top-14 z-1">
        <Menu :model-value="url.pathname" open @change="path => $router.push(path)">
          <MenuItem v-for="item in toc" :key="item.title" :value="item.title">
            <template #title>
              <h3 class="text-sm font-bold">
                {{ item.title }}
              </h3>
            </template>
            <MenuItem
              v-for="it in item.children"
              :key="it.path"
              :value="it.path"
            >
              <NuxtLink
                :to="it.path"
                class="w-full hover:text-gray-800 text-sm text-gray-600"
              >
                {{ it.title }}
              </NuxtLink>
            </MenuItem>
          </MenuItem>
        </Menu>
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

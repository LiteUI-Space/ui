<script setup lang="ts">
  import {
    Affix,
    Anchor,
    AnchorLink,
    Breadcrumb,
    Menu,
    MenuItem
  } from '@lite-space/ui'

  const route = useRoute()
  const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
  const url = useRequestURL()
</script>

<template>
  <div flex="~" class="gap-10">
    <template v-if="page?.title">
      <aside>
        <Affix :offset-top="56">
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
        </Affix>
      </aside>
      <main class="relative">
        <Breadcrumb class="" :items="['Docs', page.title]" separator="i-carbon:chevron-right" />
        <ContentRenderer :value="page" />
      </main>
      <aside>
        <Affix :offset-top="56">
          <h2 class="text-sm font-bold text-gray-800 mb-2">
            On This Page
          </h2>
          <Anchor>
            <AnchorLink href="test1">
              test1
            </AnchorLink>
            <AnchorLink title="test2" href="test2">
              <AnchorLink href="test4">
                test4
              </AnchorLink>
              <AnchorLink href="test5">
                test5
              </AnchorLink>
            </AnchorLink>
            <AnchorLink href="test3">
              test3
            </AnchorLink>
          </Anchor>
        </Affix>
      </aside>
    </template>
    <div v-else>
      error {{ error }}
    </div>
  </div>
</template>

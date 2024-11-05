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
  const isComponentsDoc = route.path.includes('components')

  const mainRef = useTemplateRef('main')
  const toc = ref<Record<'text' | 'value', string>[]>([])
  onMounted(() => {
    const elementsWithIds = mainRef.value!.querySelectorAll('[id]')
    toc.value = [...elementsWithIds].map(item => ({
      text: item.textContent!,
      value: item.id
    }))
  })

  const sortedMenus = menus.map(item => {
    if (item.title === 'Components') {
      item.children = item.children.sort((a, b) => a.title.localeCompare(b.title))
    }
    return item
  })
</script>

<template>
  <div flex="~ 1 justify-between" class="gap-20 mx-45">
    <template v-if="page?.title">
      <aside>
        <Affix :offset-top="92">
          <Menu :model-value="route.path" open @change="path => $router.push(path)">
            <MenuItem v-for="item in sortedMenus" :key="item.title" :value="item.title">
              <template #title>
                <h3 class="text-sm font-bold">
                  {{ item.title }}
                </h3>
              </template>
              <MenuItem v-for="it in item.children" :key="it.path" :value="it.path">
                <NuxtLink :to="it.path" class="w-full hover:text-gray-800 text-sm text-gray-600">
                  {{ it.title }}
                </NuxtLink>
              </MenuItem>
            </MenuItem>
          </Menu>
        </Affix>
      </aside>
      <main ref="main" class="relative flex-1" :class="{ 'prose main': !isComponentsDoc }">
        <Breadcrumb :items="['Docs', page.title]" separator="i-carbon:chevron-right" />
        <ContentRenderer :value="page" />
      </main>
      <aside>
        <Affix :offset-top="92">
          <h2 class="text-sm font-bold text-gray-800 mb-2">
            On This Page
          </h2>
          <Anchor>
            <AnchorLink v-for="item in toc" :key="item.value" :href="item.value">
              {{ item.text }}
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

<style lang="postcss">
.prose.main {
  h2 {
    @apply text-lg font-bold mb-2 cursor-pointer my-3;

    a{
      @apply no-underline font-bold;
    }

  }
  p{
    @apply my-0 text-sm;
  }
  pre{
    @apply bg-gray-50 px-2.5 py-2 border border-1 border-gray-100 rounded-md;
  }
}
</style>

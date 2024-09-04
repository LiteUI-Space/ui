<script setup lang="ts">
  import { Button, Space } from '@lite-space/ui'

  const navList = [
    { name: 'Docs', path: '/docs' },
    { name: 'Components', path: '/docs/components' }
  ]
</script>

<template>
  <div class="relative min-h-screen" flex="~ col">
    <header class="sticky top-0 z-50 w-full px-8">
      <div class="h-14 max-w-screen-2xl mx-auto" flex="~ items-center">
        <nav>
          <Space :size="24">
            <NuxtLink to="/" flex="~ items-center">
              <!-- <img
                src="/logo.svg"
                alt="logo"
                class="w-6 h-6"
              > -->
              <span class="font-500">Lite-ui/ui</span>
            </NuxtLink>
            <NuxtLink
              v-for="item in navList"
              :key="item.path"
              class="text-sm text-gray-700/80 transition hover:text-gray-800"
              :to="item.path"
            >
              {{ item.name }}
            </NuxtLink>
          </Space>
        </nav>
        <div class="" flex="~ 1 items-center justify-end">
          <NuxtLink to="https://github.com/LiteUI-Space/Lite-ui" target="_blank">
            <Button icon="i-carbon:logo-github" type="text" />
          </NuxtLink>
        </div>
      </div>
    </header>

    <div class="flex-1 mx-5xl">
      <slot />
    </div>

    <footer
      class="py-6 text-gray-500 text-xs px-8"
      border-t="~ gray-200"
    >
      <div>
        <span>Made by</span>
        <NuxtLink to="https://github.com/AntzyMo" target="_blank" class="hover:text-gray-700">
          AntzyMo
        </NuxtLink>
        <span>&copy; 2024-PRESENT</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg'
      }
    ]
  })

  useSeoMeta({
    title: 'lite-space/ui | A Vue3 based UnoCSS UI library',
    ogTitle: 'lite-space/ui | A Vue3 based UnoCSS UI library',
    description: 'A Vue3 based UnoCSS UI library.',
    ogDescription: 'A Vue3 based UnoCSS UI library.'
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

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
    title: 'lite-ui | A Vue3 based UnoCSS UI library',
    ogTitle: 'lite-ui | A Vue3 based UnoCSS UI library',
    description: 'A Vue3 based UnoCSS UI library.',
    ogDescription: 'A Vue3 based UnoCSS UI library.'

  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

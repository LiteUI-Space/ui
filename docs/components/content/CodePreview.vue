<script setup lang="ts">
  import { Divider } from '@lite-ui/ui'

  const props = defineProps<{
    src: string
    title: string
  }>()

  const url = useRequestURL()
  const comp = resolveComponent(props.src)

  const src = `${url.pathname.split('/').pop()}/${props.src}.vue`
  const { data } = await useFetch(`/api/demoCode?src=${src}`)
</script>

<template>
  <div border="~ solid gray-200 rounded-md" class="p-2">
    <div class="mb-5">
      <component :is="comp" />
    </div>
    <div class="text-sm mb-4">
      <Divider orientation="left">
        {{ title }}
      </Divider>
      <div class="prose demo">
        <ContentSlot />
        <textarea v-model="data.code" class="w-full h-200px" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.prose {
  @apply max-w-full
}

.demo {
  p {
    @apply w-full
  }
}
</style>

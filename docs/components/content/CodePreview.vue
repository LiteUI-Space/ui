<script setup lang="ts">
  import { Divider } from '@lite-space/ui'

  const props = defineProps<{
    src: string
    title: string
  }>()

  const comp = resolveComponent(props.src)
</script>

<template>
  <div border="~ solid gray-200 rounded-md" class="p-2 pb-3">
    <div class="m-3">
      <component :is="comp" />
    </div>
    <div class="text-sm">
      <Divider orientation="left">
        {{ title }}
      </Divider>
      <div class="prose demo mx-3" flex="~ col gap-2">
        <ContentSlot />

        <ContentSlot :use="$slots.code" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.prose {
  @apply max-w-full
}

.demo {
  p {
    @apply w-full m-0
  }
  pre{
    @apply m-0 p-0
  }
}
</style>

<script setup lang="ts">
  import * as changeCase from 'change-case'
  import { Divider, Tooltip } from '@lite-space/ui'

  const props = defineProps<{
    src: string
    title: string
  }>()

  const comp = resolveComponent(props.src)
  const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

  const route = useRoute()
  const toGithubUrl = computed(() => {
    const compName = route.path.split('/').at(-1)
    return `https://github.com/LiteUI-Space/ui/tree/main/packages/components/${changeCase.capitalCase(compName || '')}`
  })

  const isVisibleCode = ref(false)
  const visibleCodeContent = computed(() => isVisibleCode.value ? '收起代码' : '显示代码')

  const codeRef = useTemplateRef('code')
  const { handleCopy, copyResult, iconCopy } = useCopyCode(codeRef)

  function handleHash(href: string) {
    location.hash = href
  }
</script>

<template>
  <DefineTemplate v-slot="{ icon }">
    <span class="inline-block text-lg text-gray-400 transition hover:text-gray-500 cursor-pointer" :class="icon" />
  </DefineTemplate>

  <div class="mb-15">
    <h2 :id="title" class="text-lg font-bold mb-2 cursor-pointer" @click="handleHash(title)">
      {{ title }}
    </h2>
    <div class="text-sm mb-4">
      <ContentSlot />
    </div>
    <div border="~ solid gray-200 rounded-md" class="pb-2">
      <div class="m-4">
        <component :is="comp" />
      </div>

      <div class="text-sm">
        <Divider :margin="12" />
        <div class="flex-center gap-2" :class="{ 'mb-2': isVisibleCode }">
          <Tooltip :content="copyResult">
            <ReuseTemplate :icon="iconCopy" @click="handleCopy" />
          </Tooltip>
          <Tooltip :content="visibleCodeContent">
            <ReuseTemplate v-if="isVisibleCode" icon="i-heroicons:code-bracket-16-solid" @click="isVisibleCode = false" />
            <ReuseTemplate v-else icon="i-heroicons:chevron-up-down-16-solid rotate-90" @click="isVisibleCode = true" />
          </Tooltip>
          <Tooltip content="查看源码">
            <NuxtLink :to="toGithubUrl" target="_blank">
              <ReuseTemplate icon="i-carbon:logo-github" />
            </NuxtLink>
          </Tooltip>
        </div>

        <div
          v-show="isVisibleCode"
          ref="code"
          class="prose demo mx-3"
          flex="~ col gap-2"
        >
          <ContentSlot :use="$slots.code" />
        </div>
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

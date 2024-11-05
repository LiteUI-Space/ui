<script setup lang="ts">
  const codeRef = useTemplateRef('code')
  const { handleCopy, isCopied } = useCopyCode(codeRef)
  const iconCopy = computed(() => isCopied.value ? 'i-heroicons:check-16-solid' : 'i-heroicons:clipboard-document')
</script>

<template>
  <div ref="code" class="relative">
    <div class="absolute top-2 right-2 z-10">
      <span
        class="inline-block text-lg text-gray-400 transition hover:text-gray-500 cursor-pointer"
        :class="iconCopy"
        @click="handleCopy"
      />
    </div>
    <ContentSlot />
  </div>
</template>

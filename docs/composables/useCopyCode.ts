export function useCopyCode(el: MaybeRef<HTMLElement>) {
  const { start, ready } = useTimeout(1500, { controls: true })

  const { copy, copied } = useClipboard()
  const copyResult = computed(() => copied.value ? '复制成功' : '复制代码')
  const isCopied = computed(() => copied.value && !ready.value)
  const iconCopy = computed(() => isCopied.value ? 'i-heroicons:check-16-solid' : 'i-heroicons:clipboard-document')

  function handleCopy() {
    if (!isCopied.value) {
      copy(unref(el).textContent || '')
      start()
    }
  }

  return {
    handleCopy,
    copyResult,
    isCopied,
    iconCopy
  }
}

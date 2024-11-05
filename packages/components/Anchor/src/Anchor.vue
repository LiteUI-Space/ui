<script setup lang="ts">
  import type { AnchorProps } from './types'

  import { anchorKey } from './constants'
  import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    provide,
    ref,
    watch
  } from 'vue'

  defineOptions({
    name: 'LtAnchor'
  })

  defineProps<AnchorProps>()
  const emit = defineEmits<{
    change: [val: string]
  }>()

  const model = ref('')
  const links: string[] = []
  function onChange(val: string) {
    model.value = val
  }

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const els = links.map(id => ({
      href: id,
      offsetTop: document.getElementById(id)?.offsetTop || 0
    }))

    els.forEach((el, index) => {
      if (scrollTop >= el.offsetTop && (scrollTop <= els[index + 1]?.offsetTop || true)) {
        model.value = el.href
      }
    })
  }

  onMounted(() => {
    model.value = decodeURIComponent(location.hash).slice(1) || ''
    nextTick(() => {
      links.forEach(link => {
        const el = document.getElementById(link)
        if (el) {
          el.classList.add('section')
        }
      })
      window.addEventListener('scroll', handleScroll)
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  watch(model, val => {
    if (val) {
      emit('change', val)
    }
  })

  provide(anchorKey, {
    model: computed(() => model.value),
    onChange,
    addLink: link => links.push(link)
  })
</script>

<template>
  <div class="lt-anchor">
    <slot />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.section {
  scroll-margin-top: 80px;
}
</style>

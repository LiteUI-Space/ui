<script setup lang="ts">
  import { Button } from '@lite-ui/button'

  const name = ref('')
  const router = useRouter()
  function go() {
    if (name.value) {
      router.push(`/hi/${encodeURIComponent(name.value)}`)
    }
  }
</script>

<template>
  <Button name="123" />
  <div i-carbon-campsite class="text-5xl mb-1" />
  <p>
    <a rel="noreferrer" href="https://github.com/AntzyMo/vitesse" target="_blank">
      Vitesse Life
    </a>
  </p>

  <p class="mb-4">
    <em class="text-sm op-75">
      Vue + Vite Starter Template
    </em>
  </p>
  <div class="mb-3">
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
  </div>

  <div>
    <button
      class="btn text-sm"
      :disabled="!name"
      @click="go"
    >
      Go
    </button>
  </div>
</template>
